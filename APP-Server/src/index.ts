import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoute";

const app = express();
const port = process.env.PORT ?? 3000;


app.use(cors());
app.use(express.json());
app.use("/app",userRouter);

app.get("/me", (req,res)=>{
    res.json({message:"Tejas Taradgaonkar"}).status(200);
})

app.listen(port, ()=>{
    console.log(`Server is up and running on port: ${port}`);
})