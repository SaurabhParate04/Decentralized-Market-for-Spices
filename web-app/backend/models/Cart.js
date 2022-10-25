const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    userCart:[{
        productBrand:{
            type:String
        },
        productName:{
            type:String
        },
        varient:{
            type:String,
            default:null
        },
        quantity:{
            type:Number
        },
        price:{
            type:Number
        }
    }]
});

module.exports = mongoose.model('cart',cartSchema);