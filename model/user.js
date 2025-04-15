const monongoes = require('mongoose');

const userSchema = new monongoes.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true}
);

module.exports = monongoes.model('User',userSchema);