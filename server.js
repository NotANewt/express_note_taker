const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const api = require("./public/assets/js/index");

// TODO: Modify for this app
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

// TODO: create HTML route: GET /notes should return the notes.html file.

// TODO: create HTML route: GET * should return the index file

// TODO: create API route: GET /api/notes should read the db.json file and return all saved notes as JSON.

// TODO: create API route: POST /api/notes should receive a new note to save on the request body, add it
// to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).

// TODO BONUS: create API route: add the DELETE route to the application
// using the following guideline:
//     DELETE /api/notes/:id should receive a query parameter that contains the id of a note to
//     delete. To delete a note, you'll need to read all notes from the db.json file, remove the
//     note with the given id property, and then rewrite the notes to the db.json file.
