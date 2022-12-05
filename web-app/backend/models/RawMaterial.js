const mongoose = require('mongoose')

const rawMaterialSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }, 
    manufacturer: {
        type: String,
        required: false,
        default: ""
    },
    description: {
        type:String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model("RawMaterial", rawMaterialSchema)