const mongoose = require('mongoose')

const agroProductSchema = new mongoose.Schema({
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
    category: {
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    quantityRaised: {
        type: Number,
        required: false,
        default:0
    },
    isSatisfied: {
        type: Boolean,
        required: true,
        default: false
    },
    manufacturer: {
        type: String,
        required: false,
        default: ""
    },
    originalQty: {
        type: Number
    }, 
    trader: {
        type: String,
        default: ""
    },
    farmer: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("AgroProduct", agroProductSchema)