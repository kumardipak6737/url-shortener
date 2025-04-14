const mongoose = require('mongoose');   
// require('dotenv').config(); // Load environment variables from .env file


function connectDB() {
    mongoose.connect('mongodb://localhost:27017/shortUrl')
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = connectDB;