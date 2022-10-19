const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
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
    address:{
        type:String,
    },
    userCart: {
        type: [{
            prodName:{
                type:String,
                default:null
            },
            varient:{
                type:String,
                default:null
            },
            quantity:{
                type:Number,
                default:1
            },
            price:{
                type:Number,
                default:null
            },
        }]
    }
    

});

module.exports = mongoose.model('user',userSchema);