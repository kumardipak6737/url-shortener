const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    ShortId:{
        type:String,
        required:true,
        unique:true 
    },
    redirectUrl:{
        type:String,
        required:true,
    },

    visitHistory: [{timestamp:{type:Number}}]
},{timestamps:true})

module.exports = mongoose.model('Url', urlSchema);  