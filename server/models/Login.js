const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const login = new Schema({
    username : {
        type: String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
},{timestamps:true});

const Login = mongoose.model('Login', login);
module.exports  = Login;
