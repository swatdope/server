import express from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT, console.log(`Server is running at ${PORT}`.bgCyan));
