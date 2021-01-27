# Note Taker

----------------------

## Table of Contents

[Description](#Description) |
[Prerequisites](#Prerequisites) |
[Deployment Link](#Deployment-Link) |
[Technologies](#Technologies-Used) |
[Code Snippet](#Code-Snippet) |
[Authors](#Authors) |
[License](#License) |
[Acknowledgements](#Acknowledgements) |

## Description

Application will let user create and save notes

## Prerequisites

None

## Deployment Link

[Deploy Site](https://polar-taiga-31548.herokuapp.com/)

## Technologies Used

- Node.js
- HTML
- CSS
- Express
- Javascript

## Code Snippet

```Javascript
app.post("/api/notes", function(req, res) {
    notes.push(req.body);
    var strNotes = JSON.stringify(notes);
    fs.writeFile(outputPath, strNotes, (err) => {
        if(err) throw err;
        console.log("New note saved");
    });
    res.send("saved");
});
```

## Authors

1. **William W. Bryan**

- [Github](https://github.com/WeiLiBryan)
- [LinkedIn](https://www.linkedin.com/in/william-bryan-72730019a/)

2. **BCS TEAM**

Starting Code

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Acknowledgements

- [Stack Overflow](https://stackoverflow.com)
- [w3schools](https://w3schools.com)

### [Back to Table of Contents](#table-of-contents)