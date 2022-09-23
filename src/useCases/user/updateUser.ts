import { Request, Response } from "express";
import { UserModel } from "../../core/models/UserModel";
import { prisma } from "../../prisma/PrismaClient";

export async function updateUser(req: Request, res: Response) {
  const { id, name, email, password }: UserModel = req.body;

  try {
    const newUser = prisma.user.update({
      where: { id },
      data: { name, email, password },
    });

    return res.status(200).json({ user: newUser });
  } catch (error) {
    return res.status(400).json({ message: "Erro. Tente novamente." });
  }
}
