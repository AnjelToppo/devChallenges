const mongoose = require('mongoose');
const languages = require('../utils/languages');

const codeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Please enter some programming code']
    },
    language: {
        type: String,
        required: [true, 'Please select at one language'],
        enum: {
            values: languages,
            message: ['Please select one language from given options']
        }
    },
    theme: {
        type: String,
        default: 'light',
        required: [true, 'Please select theme'],
        enum: {
            values: ['light', 'vs-dark'],
            message: 'Theme is either: light or vs-dark'
        }
    }
}, {
    timestamps: true
});

const Code = mongoose.model('Code', codeSchema);
module.exports = Code;