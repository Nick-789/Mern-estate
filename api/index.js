import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
dotenv.config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Database connection error:", err);
});
const app=express();

app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.listen(3000,()=>{
console.log('Server running on port 3000');
});