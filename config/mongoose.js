const mongoose = require('mongoose');


async function connectToMongoose(){
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('Database connected successfully!');
    } catch (error) {

        console.log('Error occured while connecting mongoose to MongoDB:', error);
        throw error;
    }
}

module.exports = connectToMongoose;