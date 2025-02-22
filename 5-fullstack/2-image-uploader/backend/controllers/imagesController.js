const Image = require('../models/image.model');

exports.getAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json({
            status: 'success',
            results: images.length,
            data: {
                images
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
};

exports.createImage = async (req, res) => {

    try {
        const image = req.file;
        if (!image) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide an image file'
            })
        }

        const {path, originalname} = req.file;
        const newImage = await Image.create({imageUrl: path, imageFileName: originalname});
        res.status(201).json({
            status: 'success',
            data: newImage
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}

exports.getImage = async (req, res) => {
    try {
        const id = req.params.id;
        const image = await Image.findOne({ _id: id});
        res.status(200).json({
            status: 'success',
            data: {
                image
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}