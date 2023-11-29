import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/st1_crud_task")
       console.log("Connection Succeded");
    }
    catch(error){
        console.log("Database Not Connected");
    }
}