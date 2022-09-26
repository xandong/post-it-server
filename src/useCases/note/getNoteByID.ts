import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";

export async function getNoteById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const note = await prisma.note.findUnique({ where: { id } });

    if (!note) return res.status(404).json({ message: "Nota não encontrada." });

    return res.status(200).json({ note });
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente." });
  }
}
