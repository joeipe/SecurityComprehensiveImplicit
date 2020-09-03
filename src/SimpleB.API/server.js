'use strict';
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/routes')(app);

const port = process.env.PORT || 1337;
const server = app.listen(port, () => winston.info(`Listening on port ${port} in ${app.get('env')}...`));

module.exports = server;