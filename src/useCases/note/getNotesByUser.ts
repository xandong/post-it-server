import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";

export async function getNotesByUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const user = await prisma.user.findMany({
      where: { id },
      select: { notes: { orderBy: { date: "desc" } }, _count: true },
    });

    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado." });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente." });
  }
}
