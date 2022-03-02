const app = require("express").Router();
const db = require("../db/db.json");
const { request } = require("express");
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// API route: GET /api/notes reads the db.json file and return all saved notes as JSON.
app.get("/notes", (req, res) => readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))));

// API route: POST /api/notes creates a note from the data in the req.body
app.post("/notes", (req, res) => {
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

/*
/
// TODO BONUS: create API route: add the DELETE route to the application
// using the following guideline:
//     DELETE /api/notes/:id should receive a query parameter that contains the id of a note to
//     delete. To delete a note, you'll need to read all notes from the db.json file, remove the
//     note with the given id property, and then rewrite the notes to the db.json file.
*/
// DELETE Route for a specific tip
app.delete("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      writeToFile("./db/db/json", result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports = app;
