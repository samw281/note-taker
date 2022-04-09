
const fs = require('fs');
const router = require('express').Router();
const noteDataBase = require('../db/db.json');
const { v4: uuidv4 } = require("uuid");

// get request for notes
router.get('/notes', (req,res) => {
    res.json(noteDataBase);
});

// post req for notes
router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    noteDataBase.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteDataBase, null, 2));
    res.json(noteDataBase);
  });

  

module.exports = router;