const express = require("express");
const app = express();
const theNews = require('./routes/newsArticle');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middelware/not-found');
const errorHandler = require('./middelware/error-handler');
const cors = require('cors');

// middelware
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/today', theNews);
app.use(notFound)
app.use(errorHandler)

// port number 
const port =  5000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is Listing to port : ${port} & DB Connected!`));
    } catch (error) {
        console.log(error);
    }
}

start()