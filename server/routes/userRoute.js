import express from "express";
import { loginUser, registerUser, adminLogin, googleLogin } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.post('/admin', adminLogin);
userRoute.post('/google', googleLogin);

export default userRoute;