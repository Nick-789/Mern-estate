import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MONGODB");
}).catch((err)=>{
    console.log(err);
});
const app=express();

app.use('/api/user',userRouter);
app.listen(3000,()=>{
console.log('Server running on port 3000');
});