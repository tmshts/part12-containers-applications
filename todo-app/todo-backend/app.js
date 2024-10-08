const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// added by me
require('dotenv').config()

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

//console.log(process.env.MONGO_URL)

module.exports = app;