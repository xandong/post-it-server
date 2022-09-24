import { Request, Response } from "express";
import { hash } from "bcryptjs";

import { prisma } from "../../prisma/PrismaClient";
import { UserModel } from "../../core/models/UserModel";

export async function updateUser(req: Request, res: Response) {
  const { id, name, email, password }: UserModel = req.body;

  const userExists = await prisma.user.findUnique({ where: { id } });

  if (!userExists)
    return res.status(404).json({ message: "Erro. Usuário não encontrado" });

  const newData: any = new Object();

  if (name) {
    newData.name = name;
  }

  if (email) {
    newData.email = email;
  }

  if (password) {
    if (password.length < 30 && password.length > 7) {
      const passwordHash = await hash(password, 8);

      newData.password = passwordHash;
    } else return res.status(400).json({ message: "Erro. Campos inválidos" });
  }

  try {
    const newUser = await prisma.user.update({
      where: { id },
      data: newData,
    });

    return res.status(200).json({ user: newUser });
  } catch (error) {
    return res.status(400).json({ message: "Erro. Tente novamente." });
  }
}
