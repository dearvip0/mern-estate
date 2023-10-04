import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
mongoose.connect("mongodb+srv://dearvip1:oU9srn4WuU5DTmsS@project0.tusltab.mongodb.net/mern-estate?retryWrites=true&w=majority").then(() => {
console.log(process.env.MONGODB_URI)
}).catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3000, () => {
    
    console.log(`Server is running on port ${3000}`);
})