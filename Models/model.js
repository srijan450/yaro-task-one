import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const schema = new mongoose.Schema({
    mobile: {
        type: String,
        required: [true, "mobile number is required"],
        unique: [true, "mobile number already registered"],
        length: 10,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [5, "password should be atleast 5 characters long"]
    },
    token: {
        type: String,
    }
});

schema.statics.findByCredentials = async function ({ mobile, password }) {
    const user = await Model.findOne({ mobile });
    if (!user)
        return false;
    const match = await bcrypt.compare(password, user.password);
    if (!match)
        return false;
    return user;
}

schema.methods.genrateToken = async function () {
    const user = this;
    const token = await jwt.sign({ _id: user._id.toString() }, "123456789");
    user.token = token;
    await user.save();
    return token;
}

const Model = mongoose.model('User', schema);
export default Model;