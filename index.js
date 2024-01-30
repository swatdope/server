import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { errorHandler } from "./middlewares/erroHandler.js";
import goalRoute from "./routes/goalRoute.js";
import userRoute from "./routes/userRoute.js";

// configurations
dotenv.config();
connectDB();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());

// getting body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/goals", goalRoute);
app.use("/api/users", userRoute);

app.use(errorHandler);

app.listen(PORT, console.log(`Server is running at ${PORT}`.bgCyan));
