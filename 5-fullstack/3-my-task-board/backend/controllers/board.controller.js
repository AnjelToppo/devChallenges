const Board = require('../models/board.model');

exports.checkEmpty = async (req, res, next) => {
    const body = req.body;
    if (body.name.trim() === "" || body.description.trim() === "") {
        return res.status(500).json({
            status: 'fail',
            message: 'Name field or description field cannot be empty.'
        })
    }
    next()
}
exports.getAllBoards = async (req, res) => {
    try {
        const boards = await Board.find();
        res.status(200).json({
            status: 'success',
            results: boards.length,
            data: {
                boards
            }
        })
    } catch (err) {
        // console.log(err)
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}

exports.createBoard = async (req, res) => {
    try {
        const newBoard = await Board.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                board: newBoard
            }
        })
    } catch (err) {
        // console.log(err)
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}

exports.getBoard = async (req, res) => {
    try {
        const id = req.params.boardId;
        const board = await Board.findById(id);
        res.status(200).json({
            status: 'success',
            data: {
                board
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}

exports.updateBoard = async (req, res, next) => {
    try {
        const id = req.params.boardId;
        const board = await Board.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                board
            }
        })
    } catch (err) {
        // console.log(err)
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}

exports.deleteBoard = async (req, res) => {
    try {
        const id = req.params.boardId;
        await Board.findByIdAndDelete(id);
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        // console.log(err)
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong!'
        })
    }
}