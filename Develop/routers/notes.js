const notes = require("express").Router();

const fs = require('fs');

const uuid = require("../helpers/uuid")

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
    fs.readFile("./db/db.json", "utf8", (err,data) => {
        if(err) {
            console.error(err)
        } else {
            const parsedData = JSON.parse(data);
            req.body.id = uuid();
            parsedData.push(req.body);
            fs.writeFile("./db/db.json", JSON.stringify(parsedData, null, 4), (err) => {
                err ? console.error(err) 
                :res.json(parsedData)
                ,console.info(`\nData written to ./db/db.json`)
            }
            );
        }
    })
})

notes.delete("api/notes/:id", (req,res) => {
    const id = req.params.id;
    fs.readFile("./db/db.json", "utf8", (err,data) => {
        const parsedData = JSON.parse(data);
        
    })
})

module.exports = notes;