import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/get", authUser, getUserCart);
userRouter.post("/add", authUser, addToCart);
userRouter.post("/update", authUser, updateCart);

export default userRouter;
