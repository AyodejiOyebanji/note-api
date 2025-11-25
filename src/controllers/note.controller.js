const NoteService = require("../services/note.service");

exports.createNote = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const note = await NoteService.createNote({ title, content, tags });
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

exports.getAllNotes = async (req, res, next) => {
  try {
    const { tag } = req.query;
    const notes = await NoteService.getAllNotes(tag);
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

exports.getNoteById = async (req, res, next) => {
  try {
    const note = await NoteService.getNoteById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json(note);
  } catch (err) {
    next(err);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const note = await NoteService.updateNote(req.params.id, req.body);

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json(note);
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    const note = await NoteService.deleteNote(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json({ message: "Note deleted" });
  } catch (err) {
    next(err);
  }
};
