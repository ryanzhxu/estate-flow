const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//const uri = process.env.NODE_ENV ? process.env.DB_HOST_REMOTE : process.env.DB_HOST;
// tmp uri for worker test
const uri = `mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ivcdn8h.mongodb.net/estateflow`;

const connectToDB = async() => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to DB")
    } catch (e) {
        console.error("Error connecting to DB" ,e)
    }
}

module.exports = { connectToDB, db: mongoose.connection.db };
