import { Router } from "express";
import { createNote } from "../../useCases/note/createNote";
import { deleteNote } from "../../useCases/note/deleteNote";
import { getAllNotes } from "../../useCases/note/getAllNotes";
import { getNoteById } from "../../useCases/note/getNoteByID";
import { updateNote } from "../../useCases/note/updateNotes";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const noteRouter = Router();

noteRouter.post(
  "/",
  // ensureAuthenticated,
  createNote
);

noteRouter.get("/", getAllNotes);

noteRouter.get("/:id", getNoteById);

noteRouter.put(
  "/",
  // ensureAuthenticated,
  updateNote
);

noteRouter.delete(
  "/:id",
  // ensureAuthenticated,
  deleteNote
);
