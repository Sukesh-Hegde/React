// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// In-memory store for notes
let notes = [];

// Route to get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Route to get a note by ID
app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

// Route to create a new note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
  const newNote = { id, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Route to update a note by ID
app.put("/notes/:id", (req, res) => {
  const { title, content } = req.body;
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (note) {
    note.title = title;
    note.content = content;
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

// Route to delete a note by ID
app.delete("/notes/:id", (req, res) => {
  const noteIndex = notes.findIndex((n) => n.id === parseInt(req.params.id));
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
