"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
const express_1 = require("express");
const createNote_1 = require("../../useCases/note/createNote");
const deleteNote_1 = require("../../useCases/note/deleteNote");
const getAllNotes_1 = require("../../useCases/note/getAllNotes");
const getNoteByID_1 = require("../../useCases/note/getNoteByID");
const updateNotes_1 = require("../../useCases/note/updateNotes");
exports.noteRouter = (0, express_1.Router)();
exports.noteRouter.get("/", getAllNotes_1.getAllNotes);
exports.noteRouter.get("/:id", getNoteByID_1.getNoteById);
exports.noteRouter.post("/", 
// ensureAuthenticated,
createNote_1.createNote);
exports.noteRouter.put("/", 
// ensureAuthenticated,
updateNotes_1.updateNote);
exports.noteRouter.delete("/:id", 
// ensureAuthenticated,
deleteNote_1.deleteNote);
//# sourceMappingURL=noteRouter.js.map