const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    timestamp:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    orderdetails:[{
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

module.exports = mongoose.model('order',orderSchema);