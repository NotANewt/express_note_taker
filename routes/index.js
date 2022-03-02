// GET route - show all the notes (return array of objects)
const fb = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

fb.get("/notes", (req, res) => readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))));

// POST route - create a note

fb.post("/notes", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
});

// POST Route for submitting feedback

// EXTRA CREDIT: delete

module.exports = fb;

/*

// TODO: create API route: GET /api/notes should read the db.json file and return all saved notes as JSON.
// Require the JSON file and assign it to a variable called 'notesData'
const notesData = require("./db/db.json");

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get("/api/notes", (req, res) => res.json(notesData));

// TODO: create API route: POST /api/notes should receive a new note to save on the request body, add it
// to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).

// TODO BONUS: create API route: add the DELETE route to the application
// using the following guideline:
//     DELETE /api/notes/:id should receive a query parameter that contains the id of a note to
//     delete. To delete a note, you'll need to read all notes from the db.json file, remove the
//     note with the given id property, and then rewrite the notes to the db.json file.

// TODO: Modify for this app
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));

*/
