const express = require('express');

// import modular router for /notes
const notesRouter = require('./notes');

const app = express();

// middleware to get to notes router
app.use('/notes', notesRouter);

module.exports = app;