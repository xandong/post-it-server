import { Router } from "express";
import { createNote } from "../../app/stories/note/createNote";
import { deleteNote } from "../../app/stories/note/deleteNote";
import { getAllNotes } from "../../app/stories/note/getAllNotes";
import { getNoteById } from "../../app/stories/note/getNoteByID";
import { updateNote } from "../../app/stories/note/updateNotes";

export const noteRouter = Router();

noteRouter.post("/", createNote);

noteRouter.get("/", getAllNotes);

noteRouter.get("/:id", getNoteById);

noteRouter.put("/", updateNote);

noteRouter.delete("/:id", deleteNote);
