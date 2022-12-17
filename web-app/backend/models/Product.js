const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productBrand: {
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
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    options: [{
        type: String
    }],
    packetSize: {
        type: Number
    },
    quantity: {
        type: Number
    }
})

module.exports = mongoose.model("Product", productSchema)