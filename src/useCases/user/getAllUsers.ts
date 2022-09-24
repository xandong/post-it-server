import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(501).json({ message: "Erro. Tente novamente." });
  }
}
