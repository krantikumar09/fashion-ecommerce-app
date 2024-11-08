import express from "express"
import { getUserProfile } from "../controllers/profileController.js";
import authUser from "../middleware/auth.js";

const profileRoute = express.Router();

profileRoute.get('/profile',authUser, getUserProfile);

export default profileRoute;