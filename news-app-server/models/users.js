const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    first_name: {
        type: String,
        required: true,
        trim: false,
        max: 40,
        max: 150,
    },

    last_name: {
        type: String,
        required: true,
        trim: false,
        min: 40,
        max: 150,
    },

    email:{
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    createdAt: {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)