const usermodel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');


module.exports.authUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const isblacklisted = await userModel.findOne({ token: token });

    if (isblacklisted) {
        return res.status(401).json({ message: "Token is blacklisted. Please login again." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }

        req.user = user;
        return next();

    } catch (err) {
        return res.status(400).json({ message: "Invalid token." });
    }

}
