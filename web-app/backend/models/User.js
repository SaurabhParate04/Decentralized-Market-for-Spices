const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
    },
    addressl1:{
        type:String,
        required:true,
    },
    addressl2:{
        type:String,
    },
    landmark:{
        type:String,
    },
    pincode:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('user',userSchema);