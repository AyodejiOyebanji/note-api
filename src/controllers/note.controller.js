const NoteService = require("../services/note.service");

// Create a new note
exports.createNote = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const note = await NoteService.createNote({ title, content, tags });
    res.status(201).json(note);
  } catch (err) {

    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all notes
exports.getAllNotes = async (req, res, next) => {
  try {
    const { tag, page = 1, limit = 10 } = req.query;
    const notes = await NoteService.getAllNotes(tag, page, limit);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};


// Get note by ID
exports.getNoteById = async (req, res, next) => {
  try {
    const note = await NoteService.getNoteById(req.params.id);

    if (!note) return res.status(404).json({ error: "Note not found" });

    res.status(200).json(note);
  } catch (err) {
   
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update note by ID
exports.updateNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const note = await NoteService.updateNote(req.params.id, req.body);

    if (!note) return res.status(404).json({ error: "Note not found" });

    res.status(200).json(note);
  } catch (err) {
    
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete note by ID
exports.deleteNote = async (req, res, next) => {
  try {
    const note = await NoteService.deleteNote(req.params.id);

    if (!note) return res.status(404).json({ error: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
   
    res.status(500).json({ error: "Internal server error" });
  }
};
