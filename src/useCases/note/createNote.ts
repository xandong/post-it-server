import { Request, Response } from "express";
import { NoteModel } from "../../core/models/NoteModel";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";
import { UserModel } from "../../core/models/UserModel";

export async function createNote(req: Request, res: Response) {
  const { title, description, content, authorId, link }: NoteModel = req.body;

  if (!title || !description)
    return res
      .status(400)
      .json({ message: "Campos título e descrição são obrigatórios." });

  if (!authorId)
    return res.status(400).json({ message: "Id do author é necessário." });

  let author: UserModel | null;

  try {
    author = await prisma.user.findUnique({ where: { id: authorId } });

    if (!author) return res.status(404).json({ message: "Author não existe." });
  } catch (error) {
    res.status(502).json({ message: "Erro externo. Tente novamente." });
  }

  try {
    const date = new Date();

    await prisma.note.create({
      data: {
        authorId,
        authorName: author!.name,
        date,
        title,
        description,
        content,
        link,
      },
    });

    return res.status(201).json({ message: "Nota criada com sucesso." });
  } catch (err) {
    res.status(502).json({ message: "Erro externo. Tente novamente." });
  }
}
