const express = require('express');
const path = require ('path');
const api = require('./Develop/route/index.js');

const PORT = process.env.port || 3001;

const app = express();

// middleware for parsing JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);
// middleware to serve upt static assets from the public folder
app.use(express.static('public'));


// GET route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
);
// Get route for homepage
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, 'Develop/public', 'index.html'))
);

app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, 'Develop/public', 'index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);