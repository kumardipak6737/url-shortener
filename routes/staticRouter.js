const express = require('express');
const url = require('../model/url.js')
const router = express.Router();

router.get('/', (req ,res)=>{
    const url = url.find({});
    return res.render("Home", { urls: url });
})

module.exports = router;