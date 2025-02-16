const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors=require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const codesRouter = require('./routes/codes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/codes', codesRouter)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"))
})
module.exports = app;
