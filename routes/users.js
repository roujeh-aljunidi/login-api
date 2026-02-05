const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
    const user = await user.find({}, {password: 0});
    res.status(200).json(users);
});

module.exports = router;