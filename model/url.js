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

    visitHistory: [{timestamp:{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true})

module.exports = mongoose.model('Url', urlSchema);  