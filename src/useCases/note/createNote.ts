import { NoteModel } from "../../core/models/NoteModel";
import { Request, Response } from "express";
import { prisma } from "../../prisma/PrismaClient";

export async function createNote(req: Request, res: Response) {
  const { title, description, content, authorId }: NoteModel = req.body;

  if (!title || !description)
    return res
      .status(400)
      .json({ message: "Campos título e descrição são obrigatórios." });

  try {
    await prisma.note.create({
      data: {
        authorId,
        title,
        description,
        content,
      },
    });
  } catch (err) {
    res.status(501).json({ message: "Erro ao criar, tente novamente." });
  }

  return res.status(201).json({ message: "Nota criada com sucesso!" });
}
