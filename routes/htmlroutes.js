const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// 'Get /notes'  should return the notes.html file.
main2.get ("/notes", (req, res) => 
res.sendFile(path.join(__dirname, "../public/notes.html"))
);

