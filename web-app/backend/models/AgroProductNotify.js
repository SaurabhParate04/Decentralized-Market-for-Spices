const mongoose = require('mongoose')

const agroProductNotifySchema = new mongoose.Schema({
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
    name: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("AgroProductNotify", agroProductNotifySchema)