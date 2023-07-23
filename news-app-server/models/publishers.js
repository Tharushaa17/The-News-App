// const mongoose = require('mongoose');

// const ArticleShecma = new mongoose.Schema({
    
//     first_name: {
//         type: String,
//         required: [true, 'Must Provided a Name'],
//         trim: false,
//         maxlength: [40, 'Name can not be morethan 40 charectors']
//     },

//     middel_name: {
//         type: String,
//         required: [true, 'Must Provided a Article'],
//         minlength: [100, 'Article should be more than 100 charectors']
//     },

//     last_name: {
//         type: String
//     },

//     company_name:{

//     },

//     company_id:{

//     },

//     DOB: {

//     },

//     NIC: {
//         type: String,
//         required: [true, 'Must Provided a Location'],
//     },

//     passport_id:{

//     },

//     email:{
//         type: String
//     },

//     mobile_nu:{
//         type : Number,
//         default : 0
//     },

//     telephone_nu: {
//         type: String,
//         required: true,
//     },

//     address_line1:{

//     },
//     address_line2:{

//     },
//     address_line3:{

//     },
//     city:{

//     },
//     province:{

//     },
//     country:{

//     },
//     zip:{

//     },

//     Likes: {
//     },

//     unlikes: {

//     },

//     password: {

//     },

//     createdAt: {
//         type : Date,
//         default : new Date()
//     }
// })

// module.exports = mongoose.model('Article', ArticleShecma)