const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: [true, 'Please provide image url']
    },
    imageFileName: {
        type: String
    }
}, {
    timestamps: true
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;