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
