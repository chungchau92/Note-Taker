const notes = require("express").Router();

const fs = require('fs');

notes.get("/api/notes", (req, res) => {
    fs.readFile()
});