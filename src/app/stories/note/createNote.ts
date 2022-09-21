import { NoteModel } from "../../../core/models/NoteModel";
import { Request, Response } from "express";

export async function createNote(req: Request, res: Response) {
  const { title, description, content } = req.body;
  const note: NoteModel = { title, description, content };

  if (!title || !description)
    return res
      .status(400)
      .json({ message: "Campos título e descrição são obrigatórios." });

  // try {
  //   createUser({ name, email, password });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(502).json({ message: "Erro ao cadastrar" });
  // }

  console.log(note);
  return res.status(201).json({ message: "Nota criada com sucesso!" });
}
