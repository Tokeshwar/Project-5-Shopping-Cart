const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    currencyId: {
        type: String,
        required: true
        //default: "INR"
    },

    currencyFormat: {
        type: String,
        required: true
        // default: "₹"
    },

    isFreeShipping: {
        type: Boolean,
        default: false
    },

    productImage: {
        type: String,
    },

    style: String,

    availableSizes: {
        type: [],
        // enum: ["S", "XS", "M", "X", "L", "XXL", "XL"],
        required: true
    },

    installments: Number,

    deletedAt: {
        type: Date,
        default: ""
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })


module.exports = mongoose.model('Product', productSchema)