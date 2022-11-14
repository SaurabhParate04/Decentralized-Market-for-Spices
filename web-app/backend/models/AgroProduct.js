const mongoose = require('mongoose')

const agroProductSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model("AgroProduct", agroProductSchema)