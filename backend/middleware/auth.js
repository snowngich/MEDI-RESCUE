const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    if (!decoded.user || !decoded.user.id) {
      return res.status(401).json({ message: "Invalid token payload." });
    }

    const user = await User.findById(decoded.user.id);
    if (!user) {
      return res.status(401).json({ message: "User does not exist." });
    }

    req.user = { id: user._id, role: user.role };
    next();
  } catch (error) {
    console.error("❌ Authentication error:", error.message);
    res.status(400).json({ message: "Invalid token or authentication error." });
  }
};
