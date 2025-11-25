const Note = require("../models/note.model");

class NoteService {
  static async createNote(data) {
    return await Note.create(data);
  }

  static async getAllNotes(tag, page = 1, limit = 10) {
    const query = tag ? { tags: tag } : {};

    const notes = await Note.find(query)
      .sort({ createdAt: -1 }) 
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Note.countDocuments(query);

    return {
      total,
      page: Number(page),
      limit: Number(limit),
      data: notes,
    };
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
