import express from "express";
import { addReview, createProduct, deleteProduct, getAllProducts, getAllReviews, getProductById, updateProduct } from "../controllers/userController.js";
const router=express.Router();

router.post("",createProduct);

router.get("",getAllProducts);

router.get("/:productid",getProductById);

router.put("/:productid",updateProduct);

router.delete("/:productid",deleteProduct);

router.post("/:productid/reviews",addReview);

router.get("/:productid/reviews",getAllReviews);

router.put("/:productid/reviews/:reviewid",addReview);

router.delete("/:productid/reviews/:reviewid",addReview);

export default router;