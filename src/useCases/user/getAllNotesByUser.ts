import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";

export async function getAllNotesByUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const notes = await prisma.note.findMany({ where: { authorId: id } });

    if (!notes)
      return res.status(404).json({ message: "Nenhuma nota encontrada." });

    return res.status(200).json({ notes });
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente." });
  }
}
