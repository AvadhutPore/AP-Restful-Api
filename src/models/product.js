const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100M"
    },
})


// We are creating new collection
const ProductsRanking = new mongoose.model("ProductRank", productSchema)

module.exports = ProductsRanking;