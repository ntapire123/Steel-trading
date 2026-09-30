const { UserModel } = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await UserModel.findById(data.id);

    if (user) {
      return res.json({ status: true, user: user.username });
    }

    return res.json({ status: false });
  });
};

const requireAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = data.id;
    next();
  });
};


module.exports = { userVerification, requireAuth   };

