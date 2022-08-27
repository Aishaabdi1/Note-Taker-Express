
readFromFile("db/db.json" ).then((data) => res.json(JSON.parse(data)))
;


main.post('/notes', (req, res) => {

    const NewNote = JSON.parse(fs.readFileSync("db/db.json"));
      const Note = req.body;
      Note.id = uuid();
      NewNote.push(Note);
      fs.writeFileSync("db/db.json", JSON.stringify(NewNote));
      res.json(NewNote);

    });