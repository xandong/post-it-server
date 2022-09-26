import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";
import { NoteModel } from "../../core/models/NoteModel";

export async function updateNote(req: Request, res: Response) {
  const { id, title, description, content }: NoteModel = req.body;

  try {
    const isNoteExists = await prisma.note.findUnique({ where: { id } });

    if (!isNoteExists)
      return res.status(404).json({ message: "Nota não encontrada." });
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente." });
  }

  const newData: any = new Object();

  if (title) {
    newData.title = title;
  }

  if (description) {
    newData.description = description;
  }

  if (content) {
    newData.content = content;
  }

  try {
    const content = await prisma.note.update({
      where: { id },
      data: newData,
    });

    return res.status(201).json({ note: content });
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente." });
  }
}
