import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// login route
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.json({ success: false, message: "User doesn't exists!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token, message: "Loged in!" });
    }
  } catch (error) {
    console.log("Login error: ", error);
    res.json({
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

    if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({ success: true, token, message: "Admin loged in!"});
    }else {
      res.json({ success: false, message: "Invalid credentials!"});
    }
  } catch (error) {
    console.log("Admin: ", error);
    res.json({ success: false, message: "Something went wrong!"})
  }
};



export { loginUser, registerUser, adminLogin };
