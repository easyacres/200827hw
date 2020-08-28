
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

const notesAdded = [
    {
        routeId: "2500"+1,
        notes: ""
    }
];



// app.get("/api/notes/db.json", (req, res) => {
//     const chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (let i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
  

  fs.appendFile("db.json", notesAdded, err => {
    if (err) {
      throw err;
    }
    console.log(notesAdded);
  });



app.post("/notes", (req, res) => {

    const newNote = req.body;

    newNote.routeId = newNote.name;
  
    console.log(newNote);
  
    notesAdded.push(newNote);
  
    res.json(newNote);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
  
