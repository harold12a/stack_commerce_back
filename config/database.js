import mongoose from "mongoose";
import "dotenv/config";

let link = process.env.MONGODB_URI;

mongoose
  .connect(link)
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));