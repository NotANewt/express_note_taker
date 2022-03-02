const express = require("express");
const path = require("path");

const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// HTML route: GET /index returns index.html file
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// HTML route: GET /notes returns notes.html file
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));

/*

// TODO: create HTML route: GET /notes should return the notes.html file.
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// TODO: create HTML route: GET * should return the index file
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

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
