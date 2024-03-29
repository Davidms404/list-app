const jwt = require('jsonwebtoken');
const config = require('../config.js');
const User = require('../models/User.js');

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, config.SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "No user found" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: "Token validation error", details: error.message });
  }
}