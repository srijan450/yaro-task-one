import Model from "../Models/model.js";
import bcryptjs from "bcryptjs";

export const sign = async (req, res) => {
    const requested = Object.keys(req.body);
    const allowed = ["mobile", "password"];
    const valid = requested.every((item) => allowed.includes(item));

    if (!valid || requested.length !== 2)
        return res.status(400).json({ error: "Invalid request to the server" });
    try {
        const { mobile, password } = req.body;
        const user = await Model.findByCredentials(req.body);
        if (!user) {
            const hashedPassword = await bcryptjs.hash(password, 8);
            const newUser = await Model({ mobile, password: hashedPassword });
            const token = await newUser.genrateToken();
            res.cookie('token', token, { httpOnly: true, });
            return res.status(201).json({ success: true, message: "registration successful" });
        }
        const token = await user.genrateToken();
        res.cookie('token', token, { httpOnly: true, });
        res.status(201).json({ success: true, message: "login successful" });

    } catch (e) {
        if (e.code === 11000) {
            return res.status(404).json({ success: false, message: "incorrect password" });
        }
        res.status(500).json({ error: "internal server error" });
    }
}

export const page = (req, res) => {
    res.status(200).json({ message: "hello form srijan shankar dubey" });
}

export const signOut = (req, res) => {
    req.user.token = "";
    req.user.save();
    res.status(201).json({ success: true, message: "sign-out successful" });
}