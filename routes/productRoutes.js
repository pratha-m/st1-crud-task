import express from "express";
import { addReview, createProduct, deleteProduct, deleteReview, getAllProducts, getAllReviews, getProductById, updateProduct, updateReview } from "../controllers/userController.js";
const router=express.Router();

router.post("",createProduct);

router.get("",getAllProducts);

router.get("/:productid",getProductById);

router.put("/:productid",updateProduct);

router.delete("/:productid",deleteProduct);

router.post("/:productid/reviews",addReview);

router.get("/:productid/reviews",getAllReviews);

router.put("/:productid/reviews/:reviewid",updateReview);

router.delete("/:productid/reviews/:reviewid",deleteReview);

export default router;