const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const boardRouter = require('./routes/board.route');
const taskRouter = require('./routes/task.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/boards', boardRouter);
app.use('/api/v1/tasks', taskRouter);

module.exports = app;
