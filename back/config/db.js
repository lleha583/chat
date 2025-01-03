const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_HOST)
        console.log('connected to db');
    }
    catch (e) {
        console.log(e);
        return setTimeout(() => {
            connectToDb()
        }, 5000) 
    }
}

module.exports = connectToDb
