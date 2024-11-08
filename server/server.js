import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import profileRoute from "./routes/profileRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// api endpoints
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRouter);
app.use('/api/order', orderRouter);
app.use('/api', profileRoute);

app.get("/", (req, res) => {
  res.send("API working...");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
