const mongoose = require('mongoose');
const dotenv = require('dotenv');
const codes = require('./codes');
const Code = require('../models/codeModel');

dotenv.config({ path: './.env' });

const DB = process.env.DB_CONNECTION_STRING.replace('<db_password>', process.env.DB_PASSWORD);
mongoose
    .connect(DB)
    .then(() => {
        console.log('DB connection successful!');
    })
    .catch(err => {
        console.log(err)
    })
;

const seedDB = async () => {
    try {
        await Code.deleteMany();
        await Code.create(codes);
    } catch (err) {
        console.log(err)
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});