import mongoose from "mongoose";
// const { MONGODB_URI } = process.env;
const uri = "mongodb+srv://sousououederni:Eslem12++@personal-dashboard.bishk.mongodb.net/";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(uri as string);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};