import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";

export async function getAllNotes(req: Request, res: Response) {
  try {
    const notes = await prisma.note.findMany();

    res.status(200).json({ notes });
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente" });
  }
}
