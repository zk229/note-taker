const notes = require("../../db/db.json");
const router = require("express").Router();
const uuid = require("uuid");
const { validateNote, writeNote, deleteById } = require("../../lib/notes");

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

router.delete("/notes/:id", (req, res) => {
    if(!deleteById(req.params.id)) {
        res.status(400).send("No note with this ID was found");
    }
    else{
        res.json(notes);
    }
});

module.exports = router;