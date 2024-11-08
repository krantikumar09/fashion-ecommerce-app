import userModel from "../models/userModel.js";

// get user info
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const profile = await userModel.findById(userId).select('-password');
    if (!profile) {
      return res.json({ success: false, message: "User not found." });
    }
    res.json({ success: true, profile });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong." });
  }
};

export { getUserProfile };
