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
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model("AgroProductNotify", agroProductNotifySchema)