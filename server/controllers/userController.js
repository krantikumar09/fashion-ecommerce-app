import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// login route
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exists!" });
    }

    if (!user.password) {
      return res.json({
        success: false,
        message: "Please login with Google",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials!" });
    }

    const token = createToken(user._id);
    return res.json({ success: true, token, message: "Logged in!" });
  } catch (error) {
    console.log("Login error: ", error);
    return res.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
};

//  register route
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists!" });
    }

    // validate email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email!",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password!",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token, message: "Registered successfully!" });
  } catch (error) {
    console.log("register error: ", error);
    res.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
};

// admin login route
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email == process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token, message: "Admin loged in!" });
    } else {
      res.json({ success: false, message: "Invalid credentials!" });
    }
  } catch (error) {
    console.log("Admin: ", error);
    res.json({ success: false, message: "Something went wrong!" });
  }
};

const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    // Verify token with :contentReference[oaicite:0]{index=0}
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, name, email, picture } = payload;

    // Check if user exists
    let user = await userModel.findOne({ email });

    if (!user) {
      // Generate a random hash so required password validation passes for OAuth users.
      const randomPassword = `${sub}${Date.now()}`;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(randomPassword, salt);

      // Create new Google user
      user = await userModel.create({
        name,
        email,
        googleId: sub,
        picture,
        password: hashedPassword,
      });
    } else {
      // Link Google account if not already linked
      if (!user.googleId) {
        user.googleId = sub;
        await user.save();
      }
    }

    // Generate JWT (FIXED)
    const jwtToken = createToken(user._id);

    res.json({
      success: true,
      token: jwtToken,
      message: "Google login successful",
      user,
    });

  } catch (err) {
    console.error("Google Login Error:", err);
    res.status(401).json({
      success: false,
      message: "Google login failed",
    });
  }
};

export { loginUser, registerUser, adminLogin, googleLogin };
