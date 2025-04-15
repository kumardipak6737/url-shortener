const express = require('express');
const userModel = require('../model/user');
const urlModel = require('../model/url');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../Service/auth.js');

module.exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await userModel.create({
            username,
            email,
            password
        });

        const sessionId = uuidv4();
        setUser(sessionId, user); // Store session
        res.cookie("uid", sessionId); // Set cookie

        const url = await urlModel.find({ createdBy: user._id }); // Fixed
        return res.render('Home', { urls: url });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};


module.exports.Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const matchUser = await userModel.findOne({ email, password });

        if (matchUser) {
            const sessionId = uuidv4();
            setUser(sessionId, matchUser); // Store session
            res.cookie("uid", sessionId);  // Set cookie

            const url = await urlModel.find({ createdBy: matchUser._id }); // Fixed
            return res.render('Home', { urls: url });
        } else {
            return res.render('login', {
                message: "Invalid email or password"
            });
        }
    } catch (err) {
        console.log(err, 'error');
    }
};
