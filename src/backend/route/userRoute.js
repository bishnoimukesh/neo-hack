const express = require('express');
const app = express.Router();
const User = require('../controller/user');

app.post('/login', async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) {
      const user = req.body;
      res.send(user);
    } else {
      res.status(400).send('Login Failed');
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    delete user.password;
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/update', async (req, res) => {
  try {
    await User.findOneAndUpdate({
      _id: req.body._id,
    }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = app;