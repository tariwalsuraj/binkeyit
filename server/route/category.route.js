// import { Router } from "express";
// import auth from "../middleware/auth.js";
// import { addToCartItemController, deleteCartItemQtyController, getCartItemController, updateCartItemQtyController } from "../controllers/cart.controller.js";

// const cartRouter = Router()

// cartRouter.post('/create',auth,addToCartItemController)
// cartRouter.get("/get",auth,getCartItemController)
// cartRouter.put('/update-qty',auth,updateCartItemQtyController)
// cartRouter.delete('/delete-cart-item',auth,deleteCartItemQtyController)

// export default cartRouter
// const express = require("express");
// const router = express.Router();
// const Category = require("../models/Category");

// // Add category
// router.post("/add-category", async (req, res) => {
//   try {
//     const { name } = req.body;
//     if (!name) {
//       return res.status(400).json({ error: "Category name is required" });
//     }

//     // Create new category
//     const newCategory = new Category({ name });
//     await newCategory.save();

//     res.status(201).json({ success: true, message: "Category added successfully", data: newCategory });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;
import { Router } from 'express'
import auth from '../middleware/auth.js'
import { AddCategoryController, deleteCategoryController, getCategoryController, updateCategoryController } from '../controllers/category.controller.js'

const categoryRouter = Router()

categoryRouter.post("/add-category",auth,AddCategoryController)
categoryRouter.get('/get',getCategoryController)
categoryRouter.put('/update',auth,updateCategoryController)
categoryRouter.delete("/delete",auth,deleteCategoryController)

export default categoryRouter