const mongoose = require('mongoose')

const businessUserSchema = new mongoose.Schema({

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
    usertype:{
        type:String,
        required: true,
    },
    location:{
        type:String,
        required: true
    },
    companyname:{
        type:String,
        default: ''
    }
});

module.exports = mongoose.model('businessuser', businessUserSchema);