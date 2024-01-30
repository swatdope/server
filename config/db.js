import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO DB connection at ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
