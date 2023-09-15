const express = require('express');
const path = require ('path');
const api = require('.route/index.js');

const PORT = process.env.port || 3001;

const app = express();

// middleware for parsing JSON 
app.use(express.json());
app.use('/api', api);

app.use(express.static('pulbic'));


// GET route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);