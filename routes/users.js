const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
    try {

    const users = await User.find({}, {password: 0});
    res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
});

module.exports = router;