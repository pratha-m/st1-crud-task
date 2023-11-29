import { Product } from "../models/Product.js"

export const createProduct=async(req,res)=>{
    try{
        const {name,description,price,category}=req.body;
        const product=await Product.create({
            Name:name,   
            Description:description,
            Price:price,
            Category:category
        })
        res.status(200).json({success:true,product:product})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in creating product",error:error.message})
    }
}

export const getAllProducts=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json({success:true,product:products});
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in getting all products",error:error.message})
    }
}

export const getProductById=async(req,res)=>{
    try{
        const findProduct=await Product.findById(req.params.productid);

        res.status(200).json({success:true,product:findProduct})
    }
    catch(error){
        res.status(500).json({success:false,message:"Product Not Exists",error:error.message})
    }
}

export const updateProduct=async(req,res)=>{
    try{
        const {name,description,price,category}=req.body;     
    
        const product=await Product.findById(req.params.productid);

        if(!product) res.status(500).json({success:false,message:"Sorry this product Not Exists"});

        product.Name=name || product.Name;   

        product.Description=description || product.Description;

        product.Price=price || product.Price;

        product.Category=category || product.Category;

        await product.save();
        
        res.status(200).json({success:true,product:product})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in updating Product",error:error.message})
    }
}

export const deleteProduct=async(req,res)=>{
    try{
        const findProduct=await Product.findByIdAndDelete(req.params.productid);

        res.status(200).json({success:true,product:findProduct})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in deleting Product",error:error.message})
    }
}

export const addReview=async(req,res)=>{
    try{
        const {content,rating,author}=req.body;

        const findProduct=await Product.findById(req.params.productid);

        if(!findProduct) res.status(500).json({success:false,message:"Sorry this product Not Exists"});

        findProduct.Reviews.push({
            Content:content,
            Rating:rating,
            Author:author
        })

        await findProduct.save();

        res.status(200).json({success:true,product:findProduct})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in Adding Review",error:error.message})
    }
}

export const getAllReviews=async(req,res)=>{
    try{
        const findProduct=await Product.findById(req.params.productid);

        if(!findProduct) res.status(500).json({success:false,message:"Sorry this product Not Exists"});

        res.status(200).json({success:true,reviews:findProduct.Reviews})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in getting All Reviews",error:error.message})
    }
}
export const updateReview=async(req,res)=>{
    try{
        const {content,rating,author}=req.body;
        
        const findProduct=await Product.findById(req.params.productid);

        const reviewId=req.params.reviewid;

        if(!findProduct) res.status(500).json({success:false,message:"Sorry this product Not Exists"});

        findProduct.Reviews=findProduct.Reviews.map((eachReview)=>{
            if(eachReview._id.equals(reviewId)){
                eachReview.Content=content || eachReview.Content;
                eachReview.Rating=rating  || eachReview.Rating;
                eachReview.Author=author  || eachReview.Author;
            }
            return eachReview;
        })

        await findProduct.save()

        res.status(200).json({success:true,reviews:findProduct.Reviews})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in updating Review",error:error.message})
    }
}
export const deleteReview=async(req,res)=>{
    try{
        const findProduct=await Product.findById(req.params.productid);

        const reviewId=req.params.reviewid;

        if(!findProduct) res.status(500).json({success:false,message:"Sorry this product Not Exists"});

        findProduct.Reviews=findProduct.Reviews.filter((eachReview)=>{
            return !(eachReview._id.equals(reviewId));
        })

        await findProduct.save();

        res.status(200).json({success:true,reviews:findProduct.Reviews})
    }
    catch(error){
        res.status(500).json({success:false,message:"Error in deleting Review",error:error.message})
    }
}

