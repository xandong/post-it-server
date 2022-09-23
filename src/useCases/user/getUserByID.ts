import { Request, Response } from "express";
import { prisma } from "../../prisma/PrismaClient";

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  const user = await prisma.user.findUnique({ where: { id } });

  if (user) return res.status(200).json({ user });

  return res.status(404).json({ message: "Usuário não encontrado." });
}
