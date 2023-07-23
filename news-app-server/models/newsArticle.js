const mongoose = require('mongoose');

const ArticleShecma = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: false,
        min:15,
        max:50,
    },

    content: {
        type: String,
        required: true,
        min: 100,
    },

    images: {
        type: String,
        required: true,
        max:10,
        min:2,
    },

    location: {
        type: String,
        coordinates: [ ],
        required: true,
    },

    comments:{
        type: String
    },

    likes:{
        type : Number,
        default : 0
    },

    publisher: {
        type: String,
        required: true,
    },

    createdAt: {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Article', ArticleShecma)