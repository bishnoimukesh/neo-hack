const express = require('express');
const app = express.Router();
const User = require('../controller/user')

app.get('/login', async (req, res) => {
    try {
        const result = await User.findOne({username: req.body.username, password: req.body.password});
        if (result.length) {
            res.send('Login Successful');
        }
    }catch (err) {
        res.status(400).send(err);
        // res.status(500).json(err);
    }
});

app.get('/register', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.send('Registration Successful');
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = app;