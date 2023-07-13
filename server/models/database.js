const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_HOST_REMOTE;

const connectToDB = async() => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to DB")
    } catch (e) {
        console.error("Error connecting to DB" ,e)
    }
}

module.exports = { connectToDB, db: mongoose.connection.db };
