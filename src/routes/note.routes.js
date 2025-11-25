const express = require("express");
const router = express.Router();
const noteCtrl = require("../controllers/note.controller");

router.post("/", noteCtrl.createNote);
router.get("/", noteCtrl.getAllNotes);
router.get("/:id", noteCtrl.getNoteById);
router.put("/:id", noteCtrl.updateNote);
router.delete("/:id", noteCtrl.deleteNote);

module.exports = router;
