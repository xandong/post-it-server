import { Request, Response } from "express";
import { NoteModel } from "../../core/models/NoteModel";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";
import { User } from "@prisma/client";

export async function createNote(req: Request, res: Response) {
  const { title, description, content, authorId }: NoteModel = req.body;

  if (!title || !description)
    return res
      .status(400)
      .json({ message: "Campos título e descrição são obrigatórios." });

  if (!authorId)
    return res.status(400).json({ message: "Id do author é necessário." });

  let author: User | null | undefined;
  try {
    author = await prisma.user.findUnique({ where: { id: authorId } });

    if (!author) return res.status(400).json({ message: "Author não existe" });
  } catch (error) {
    res.status(500).json({ message: "Erro. Tente novamente." });
  }

  try {
    await prisma.note.create({
      data: {
        authorId,
        title,
        description,
        content,
      },
    });

    return res.status(201).json({ message: "Nota criada com sucesso." });
  } catch (err) {
    res.status(500).json({ message: "Erro. Tente novamente." });
  }
}
