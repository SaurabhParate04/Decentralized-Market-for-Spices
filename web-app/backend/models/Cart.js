const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    userCart:[{
        productbrand:{
            type:String
        },
        productname:{
            type:String
        },
        varient:{
            type:String,
            default:null
        },
        quantity:{
            type:String
        },
        price:{
            type:Number
        }
    }]
});

module.exports = mongoose.model('cart',cartSchema);