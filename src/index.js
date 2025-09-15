import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// ✅ Replace with your actual connection string
const MONGO_URI = "mongodb+srv://patilsharvari151_db_user:CuupJLCiNsjYqikY@panchkarma.asspvqy.mongodb.net/";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Atlas Connected"))
    .catch(err => console.error("❌ DB Connection Error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
