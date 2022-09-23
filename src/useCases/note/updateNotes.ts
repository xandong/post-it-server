import { Request, Response } from "express";
import { NoteModel } from "../../core/models/NoteModel";

export async function updateNote(req: Request, res: Response) {
  const note: NoteModel = req.body;

  console.log(note);
  return res.status(200).json({ message: note });
}
