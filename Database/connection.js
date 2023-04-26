import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DB_USER);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9e9fifr.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("cannot connect to database due to following error");
    console.log(e);
  });
