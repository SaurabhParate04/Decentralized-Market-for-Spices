const mongoose = require('mongoose')

const manufacturedProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }, 
    ingredientsUsed: {
        type: String,
        required: true
    },
    packetSize: {
        type:String,
        required: true
    },
    price: {
        type:String,
        required: true
    },
    manufacturer: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("ManufacturedProduct", manufacturedProductSchema)