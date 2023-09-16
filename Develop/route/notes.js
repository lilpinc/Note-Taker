const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const db = require('../db/db.json')



// Get route for retrieving all the feedback
notes.get('/', (req, res) => {
fs.readFile('./db/db.json', (err, data) => {
    //error logging
    if (err) throw err;
    let dbData = JSON.parse(data);
    //Returns new database
    res.json(dbData)
});   
});

// POST route for a new note 
notes.post ('/', (req, res)  => {

console.log(req.body);


const {title, text} = req.body;

// if the body has a title and a text(not empty), add info to the database
if (title && text) {
    const newNote = {
     title,
     text,
     id: uuidv4(),
    };

   db.push(newNote)

   fs.writeFileSync('./db/db.json', JSON.stringify(db))

    //responds with the note object used
    res.json(db)
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