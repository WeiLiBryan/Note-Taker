var express = require("express");
var path = require('path');
var fs = require('fs');
var util = require('util');


var app = express();
var PORT = process.env.PORT || 8081;

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
        return res.json(output);
    });
});

app.post("/api/notes", function(req, res) {
    // Assigns an id to the object which corresponds to the length of the array
    req.body.id = notes.length+1;
    notes.push(req.body);
    var strNotes = JSON.stringify(notes);
    fs.writeFile(outputPath, strNotes, (err) => {
        if(err) throw err;
        console.log("New note saved");
    });
    res.send("saved");
});

app.delete("/api/notes/:id", function(req, res) {
    var index = req.params.id-1;
    var temp = [];

    fs.readFile(outputPath, (err,data) => {
        if (err) throw err;
        var output = JSON.parse(data);

        console.log(output);
        for (var i=0; i<output.length; i++){
            if (output.length === 1){
                temp = [];
                break;
            }
            else if (i !== index){
                console.log("index",index,"i",i);
                temp.push(output[i]);
            } else console.log("Removed", output[i]);
        }
        var strNotes = JSON.stringify(temp);
        
        fs.writeFile(outputPath, strNotes, (err) => {
            if(err) throw err;
            res.send();
        });
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});