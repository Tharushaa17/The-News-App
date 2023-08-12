const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    first_name: {
        type: String,
        required: true,
        trim: false,
    },

    last_name: {
        type: String,
        required: true,
        trim: false,
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

    userRole: {
        type: Number,
        default : 1,
    },

    createdAt: {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)