const notes = require('express').Router();

// Get route for retrieving all the feedback
notes.get('/', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for a new note 
notes.post ('/', (req, res)  => {

console.log(req.body);

const {title, text } = req.body;

// if the body is true (not empty), add info to the database
if (req.body) {
    const newNote = {
     title,
     text
    };

   readAndAppend(newNote, './db/db.json');
   res.json('New note succesfully added');
}else {
    res.error('Error in adding note');
} 

});

module.exports = notes;