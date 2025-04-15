const express = require('express');
const url = require('../model/url.js')
const router = express.Router();

router.get('/', (req ,res)=>{
    if(!req.user) return res.redirect("/login")
    const url = url.findOne({ createdBy: req.user._id});
    return res.render("Home", { urls: url });
})

router.get('/signup', (req ,res)=>{
    return res.render('signup')
})

router.get('/login', (req ,res)=>{
    return res.render('login')
})

module.exports = router;