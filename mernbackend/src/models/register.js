const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true,
      
    },
    phonenumber: {
        type:Number,
        required:true,
        
    },
    getintouch: {
        type:String,
        required:true,
    
    },
    message: {
        type:String,
        required:true,
    }
})


const register = new mongoose.model("Register", UserSchema);
module.exports = register;