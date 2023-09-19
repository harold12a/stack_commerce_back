import express from "express";
import "dotenv/config.js";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/index.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";

// Mongoose
import "./config/database.js";

const serverApp = express(); // SERVER EXPRESS
const PORT = process.env.PORT || 8000; // SET PORT

//Middlewares
serverApp.use('/api/public',express.static('public'))
serverApp.use(express.json()); // Server Use JSON
serverApp.use(express.urlencoded({ extended: true })); // Query Extended
serverApp.use(cors()); // Cors Other Origins
serverApp.use(morgan("dev")); // Get Http Log

// Router
serverApp.use("/api", indexRouter);
serverApp.use(not_found_handler);
serverApp.use(error_handler);

// Server Listen
serverApp.listen(PORT, () => {
  console.log("Server on port:", PORT);
});