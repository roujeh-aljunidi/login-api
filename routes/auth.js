const express = require('express');
const bcrypt = require('bcryptjs');
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "missing fields" });
    }

    const existinguser = await User.findOne({ username });
    if (existinguser) {
        return res.status(400).json({ message: "user already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedpassword
    });

    await user.save();

    res.status(201).json({ message: "user registered" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }

    const validpassword = await bcrypt.compare(password,
 user.password);
 if (!validpassword) {
    return res.status(400).json({ message: "invalid credentials" });
    }

    res.status(200).json({ message: "login successful" });
});

module.exports = router;