const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const boardSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for board'],
    },
    description: {
        type: String,
        required: [true, 'Please provide description for board'],
    }
}, {timestamps: true});
const Board = model('Board', boardSchema);

module.exports = Board;