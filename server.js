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