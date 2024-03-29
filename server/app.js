const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const propertiesRouter = require('./routes/properties');
const workersRouter = require('./routes/workers');
const tenantsRouter = require('./routes/tenants');
const statsRouter = require('./routes/stats')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(propertiesRouter);
app.use(workersRouter);
app.use(tenantsRouter);
app.use(statsRouter);

module.exports = app;
