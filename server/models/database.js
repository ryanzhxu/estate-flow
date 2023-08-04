const mongoose = require('mongoose');

const uri = process.env.NODE_ENV ? process.env.DB_HOST_REMOTE : process.env.DB_HOST;

const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to DB');
  } catch (e) {
    console.error('Error connecting to DB', e);
  }
};

module.exports = { connectToDB, db: mongoose.connection.db };
