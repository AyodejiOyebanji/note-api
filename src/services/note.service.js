const Note = require("../models/note.model");

class NoteService {
  static async createNote(data) {
    return await Note.create(data);
  }

  static async getAllNotes(tag) {
    const filter = tag ? { tags: tag } : {};
    return await Note.find(filter).sort({ createdAt: -1 });
  }

  static async getNoteById(id) {
    return await Note.findById(id);
  }

  static async updateNote(id, data) {
    return await Note.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteNote(id) {
    return await Note.findByIdAndDelete(id);
  }
}

module.exports = NoteService;
