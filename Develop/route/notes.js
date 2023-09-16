const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helper/fsUtils');

// Get route for retrieving all the feedback
notes.get('/', (req, res) => 
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for a new note 
notes.post ('/', (req, res)  => {

console.log(req.body);


const {title, text} = req.body;

// if the body is true (not empty), add info to the database
if (title && text) {
    const newNote = {
     title,
     text,
     id: uuidv4(),
    };

   readAndAppend(newNote, './db/db.json');

   const response = {
    status: 'success',
    body: newNote
   }
   res.json(response);
}else {
    res.error('Error in adding note');
} 

});

notes.delete ('/:id', (req, res) => {
    if (req.params.id){
        const id = req.params.id;
        for (let i = 0; i < reviews.length; i++){
            const currentNote = notes[i];
            if (currentNote.id === id){
                // delete current note.
            }
        }
    }
    
});

module.exports = notes;