import mongoose from "mongoose";
const reviewSchema=new mongoose.Schema({
    Content:{
     type:String,
     required:true,
     maxLength:500
    },
    Rating:{
     type:Number,
     required:true,
     min:1,
     max:5
    },
    Author:{
     type:String,
     required:true,
    },
    CreatedAt:{
     type:Date,
     default:new Date()
    }
})
const productSchema=new mongoose.Schema({
   Name:{
    type:String,
    required:true,
    maxLength:255
   },
   Description:{
    type:String,
    required:true,
    maxLength:1000
   },
   Price:{
    type:Number,
    required:true,
    min:0
   },
   Category:{
    type:String,
    required:true,
   },
   Reviews:[reviewSchema]
})
export const Product=mongoose.model("Product",productSchema);
