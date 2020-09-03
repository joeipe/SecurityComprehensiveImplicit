const express = require('express');
const cors = require('cors');
const courses = require('../routes/courses');

module.exports = function(app) {
    app.use(express.json());
    app.use(cors({origin: 'http://localhost:4200'}));
    app.use('/api/courses', courses);
}