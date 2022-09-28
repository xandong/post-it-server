import { Router } from "express";
import { createNote } from "../../useCases/note/createNote";
import { deleteNote } from "../../useCases/note/deleteNote";
import { getAllNotes } from "../../useCases/note/getAllNotes";
import { getNoteById } from "../../useCases/note/getNoteByID";
import { getNotesByUser } from "../../useCases/note/getNotesByUser";
import { updateNote } from "../../useCases/note/updateNotes";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const noteRouter = Router();

noteRouter.get("/", getAllNotes);

noteRouter.get("/:id", getNoteById);

noteRouter.get("/user/:id", getNotesByUser);

noteRouter.post("/", ensureAuthenticated, createNote);

noteRouter.put("/", ensureAuthenticated, updateNote);

noteRouter.delete("/:id", ensureAuthenticated, deleteNote);
