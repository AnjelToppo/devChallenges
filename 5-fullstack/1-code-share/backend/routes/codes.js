const express = require('express');
const router = express.Router();
const codesController = require('./../controllers/codesController')

router.route('/').get(codesController.getAllCodes).post(codesController.createCode);
// implement get tour, create tour
router.route('/:id').get(codesController.getCode);


module.exports = router;