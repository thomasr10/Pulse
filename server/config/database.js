const mongoose = require('mongoose');

const connectDataBase = async(DB_URL) => {
    
    try {
        mongoose.connect(DB_URL);
        console.log('Connected to MongoDB');

    } catch(e) {
        console.error(`Failed to connect to the DB : ${e}`);
        process.exit(1);
    }
}

module.exports = connectDataBase;