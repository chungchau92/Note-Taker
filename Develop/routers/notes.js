const notes = require("express").Router();

const fs = require('fs');

notes.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json" , "utf8", (err,data) => {
        if(err) {
            console.log(err)
        } else {
            res.json(JSON.parse(data))
        }
    }) 
});

notes.post("/api/notes", (req,res) => {
    const { title, text } = req.body;
    
})

module.exports = notes;