const express = require('express');
const app = express();
const cors = require('cors');
const urlRoute  = require('./routes/url');
const mongoose = require('mongoose');
const connectDB = require('./db/db.js')
const path = require('path')
const url = require('./model/url.js')
const staticRouter = require('./routes/staticRouter.js')
const userRouter = require('./routes/user.js')
const cookieparser = require('cookie-parser')
const middleware = require('./middleware/auth.js')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser())

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



app.use('/url',
    middleware.restrictToLoggedInUserOnly,
    urlRoute);
app.use('/user', userRouter);
app.use('/',
    middleware.checkauth,
    staticRouter);


module.exports = app;