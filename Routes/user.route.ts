import express from "express";

const userRouter=express.Router();

userRouter.get("/",(req,res)=>{
    res.send("hi user")
})

userRouter.get("/hi",(req,res)=>{
    res.send("hi")
})
userRouter.get("/hi2",(req,res)=>{
    res.send("hi2")
})
export {userRouter}