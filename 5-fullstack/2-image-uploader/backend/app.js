const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const imageRouter = require('./routes/images');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/images', imageRouter);

app.use(function (err, req, res, next) {
    res.status(500).json({
        status: 'fail',
        message: err.message,
    });
});


module.exports = app;
