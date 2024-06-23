import express from "express";
import type { Request, Response } from "express";

import * as userController from "../controllers/userController"

const userRouter = express.Router();

userRouter.get("/getAllUsers", async (req:Request,res:Response)=>{
    try{
        const users = await userController.findAllUsers();
        return res.status(200).json(users);
    } catch(error:any){
        return res.status(500).json(error.message);
    }

})

export {userRouter};

