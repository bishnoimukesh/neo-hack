const express = require('express');
const app = express.Router();
const User = require('../controller/user');

app.post('/login', async (req, res) => {
  console.log(req, 'req')
  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (result) {
      res.send(result);
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
    }, 
    {new: true})
    const user = await User.findOne({
      _id: req.body._id,
    });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/updateProject', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({
      _id: req.body._id,
    }, 
    {$push: { project: req.body.projectData },},
    {new: true});
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/updateSkill', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({
      _id: req.body._id,
    }, 
    {$push: { skill: req.body.skillData },},
    {new: true});
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.post('/updateExperience', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({
      _id: req.body._id,
    }, 
    {$push: { experience: req.body.experienceData },},
    {new: true});
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = app;