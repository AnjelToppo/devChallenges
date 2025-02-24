const express = require('express');
const router = express.Router();

const boardController = require('../controllers/board.controller');

router
    .route('/')
    .get(boardController.getAllBoards)
    .post(boardController.checkEmpty, boardController.createBoard);

router
    .route('/:boardId')
    .get(boardController.getBoard)
    .put(boardController.checkEmpty, boardController.updateBoard)
    .delete(boardController.deleteBoard)


module.exports = router;