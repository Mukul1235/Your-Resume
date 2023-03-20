const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) {
      res.send(result);
    } else {
      res.status(400).json({ message: "login failed" });
    }
  } catch (err) {
    req.status(400).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send(newuser);
    // res.send("Registration Successful");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/update", async (req, res) => {
  try {

    console.log(req.body)
    await User.findByIdAndUpdate({_id: req.body._id } , req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
