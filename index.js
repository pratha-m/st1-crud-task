import express from "express";
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const app=express();
const PORT=3001;

app.use(express.json());
app.use("/api/products",productRoutes);

connectDB();

app.listen(PORT,()=>{
   console.log(`Listening at Port ${PORT}`)
})