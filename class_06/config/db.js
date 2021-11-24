const mongoose = require('mongoose');

const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI);
};    // za konekcija do bazata

module.exports = connectToDb;