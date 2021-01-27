var express = require("express");
var path = require('path');
var fs = require('fs');
const { deepStrictEqual } = require("assert");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const OUTPUT_DIR = path.resolve(__dirname, "db");
const outputPath = path.join(OUTPUT_DIR, "db.json");

var notes = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile(outputPath, (err,data) => {
        if (err) throw err;
        var output = JSON.parse(data);
        console.log(output);
        return res.json(output);
    });
});

app.post("/api/notes", function(req, res) {
    notes.push(req.body);
    strNotes = JSON.stringify(notes);
    fs.writeFile(outputPath, strNotes, (err) => {
        if(err) throw err;
        console.log("New note saved");
    });
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});