const fs = require("fs");
const path = require("path");
const noteArray = require("../db/db.json");

function validateNote(note) {
    if(!note.text || typeof note.text !== "string") {
        return false;
    }   
    if(!note.title || typeof note.title !== "string") {
        return false;
    }
    return true;
}

function writeNote(note) {
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify( { notes: noteArray}, null, 2)
    )
    return note;
}

module.exports = {validateNote, writeNote};