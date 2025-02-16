const Code = require('../models/codeModel');

exports.getAllCodes = async (req, res) => {
    try {
        const codes = await Code.find();
        res.status(200).json({
            status: 'success',
            results: codes.length,
            data: {
                codes
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail', message: 'Something went wrong!'
        })
    }
}

exports.createCode = async (req, res) => {
    const newCode = req.body;
    if (!newCode.code || !newCode.code.trim() || !newCode.language || !newCode.theme) {
        return res.status(400).json({
            status: 'fail', message: 'Please provide all fields'
        })
    }
    try {
        const newCode = await Code.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                code: newCode
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail', message: 'Something went wrong!'
        })
    }
}

exports.getCode = async (req, res) => {
    try {
        const id = req.params.id;
        const code = await Code.findOne({_id: id});
        res.status(200).json({
            status: 'success',
            data: {
                code
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}