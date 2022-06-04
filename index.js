import express from "express";
import Route from "./Routes/routes.js";
import "./Database/connection.js";
import cookieParser from "cookie-parser";
const port = process.env.PORT || 8000;
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Route);
app.listen(port, () => {
    console.log(`server started at port ${port}`);
});