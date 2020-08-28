
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

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $ heroku login
// heroku: Press any key to open up the browser to login or q to exit:
// Opening browser to https://cli-auth.heroku.com/auth/cli/browser/f403cf20-a079-411a-8cb0-25626b2e73a0?requestor=SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAMMjQuOTkuMTQ3LjU2ZAAGc2lnbmVkbgYA-JAOM3QB.-caDAU3Drk6xcHAyNJk1wJ773P2O1ut0GfCB5TL8HTQ
// heroku: Waiting for login... |
// ^CTerminate batch job (Y/N)? ^C
// Terminate batch job (Y/N)? y

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $ heroku login
// heroku: Press any key to open up the browser to login or q to exit:
// Opening browser to https://cli-auth.heroku.com/auth/cli/browser/b74cda64-1043-433d-86d3-bc74b69c9206?requestor=SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAMMjQuOTkuMTQ3LjU2ZAAGc2lnbmVkbgYA7SoRM3QB.KyvOtuxcxU8dMqT3YY77w-U8VG5nbyaMqD9IYx0zrzg
// Logging in... done
// Logged in as flybigbusiness@gmail.com


// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $ git remote -v
// origin  git@github.com:easyacres/200827hw.git (fetch)
// origin  git@github.com:easyacres/200827hw.git (push)

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $ heroku create
// Creating app... done, ⬢ ancient-plains-28442
// https://ancient-plains-28442.herokuapp.com/ | https://git.heroku.com/ancient-plains-28442.git


// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $ heroku create
// Creating app... done, ⬢ ancient-plains-28442
// https://ancient-plains-28442.herokuapp.com/ | https://git.heroku.com/ancient-plains-28442.git

// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $ git remote -v
// heroku  https://git.heroku.com/ancient-plains-28442.git (fetch)
// heroku  https://git.heroku.com/ancient-plains-28442.git (push)
// origin  git@github.com:easyacres/200827hw.git (fetch)
// origin  git@github.com:easyacres/200827hw.git (push)


// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/200827_hw (master)
// $

// https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node



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
  
