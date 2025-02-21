const express = require('express');
const router = express.Router();
const {storage} = require('../cloudinary');
const multer = require('multer');
const upload = multer({storage, limits: {fileSize: (1024 * 1024 * 2)}}).single('image');

const imagesController = require('./../controllers/imagesController');

router
    .route('/')
    .get(imagesController.getAllImages)
    .post((req, res, next) => {
        upload(req, res, (err) => {
            let error;
            if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
                error = new Error('File size must be less than or equal to 2MB!');
            } else if (err) {
                error = new Error('Something went wrong!');
            }
            next(error);
        })
    }, imagesController.createImage)

router
    .route('/:id')
    .get(imagesController.getImage)


module.exports = router;
