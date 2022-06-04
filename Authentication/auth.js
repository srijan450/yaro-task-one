import jwt from "jsonwebtoken";
import Model from "../Models/model.js";

export const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        const decode = jwt.verify(token, "123456789");
        const user = await Model.findOne({ _id: decode._id, token });
        if (!user)
            throw new Error();
        req.user = user;
        req.token = token;
        next();
    }
    catch (e) {
        res.status(404).json({ error: "please sign in to access this page" });
    }
}