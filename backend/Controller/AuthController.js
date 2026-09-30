const { UserModel } = require("../models/UserModel");
const { createSecretToken } = require("../utils/createSecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password", success: false });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    return res.json({ message: "User logged in successfully", success: true, user });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Something went wrong", success: false });
  }
};

module.exports.Logout = async(req, res, next)=>{
try{  
  res.clearCookie("token",{
    httpOnly: true,
    sameSite: "lax",
  });
  return res.json({message: "User logged out successfully", success: true});
}
catch(error){
  console.error(error);
}
}
