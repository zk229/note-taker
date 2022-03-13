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
        JSON.stringify(noteArray, null, 2)
    )
    return note;
}

function deleteById(id) {
    let found = false;
    for(let i = 0; i < noteArray.length; i++) {
        if(noteArray[i].id === id) {
            noteArray.splice(i, 1);
            found = true;
        }
    }
    if(found) {
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify( noteArray, null, 2)
        );
    }
    return found;
}

module.exports = {validateNote, writeNote, deleteById};