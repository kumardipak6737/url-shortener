const express = require('express');
const app = express();
const cors = require('cors');
const urlRoute  = require('./routes/url');
const mongoose = require('mongoose');
const connectDB = require('./db/db.js')
const path = require('path')
const url = require('./model/url.js')
const staticRouter = require('./routes/staticRouter.js')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

connectDB();


// app.get('/', (res, req)=>{
//     res.send('Hello World!')

// })

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.get("/", async (req, res) => {
    const allUrl = await url.find({});
    return res.render('Home', { urls: allUrl });
});



app.use('/url', urlRoute);
app.use('/',staticRouter);

module.exports = app;