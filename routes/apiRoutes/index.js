const notes = require("../../db/db.json");
const router = require("express").Router();
const uuid = require("uuid");
const { validateNote, writeNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = uuid.v4();

    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted");
    }
    else{
        const note = writeNote(req.body);
        res.json(note);
    }
    
});

module.exports = router;