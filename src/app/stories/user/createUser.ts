import { Request, Response } from "express";
import { database } from "../../../api/db/PrismaClient";
import { UserModel } from "../../../core/models/UserModel";

export async function createUser(req: Request, res: Response) {
  const { name, email, password }: UserModel = req.body;
  const formatEmailValid = /\S+@\S+\.\S+/;

  if (!name || !email || !password)
    return res.status(400).json({ message: "Campos obrigatórios." });

  if (!formatEmailValid.test(email))
    return res.status(400).json({ message: "Email inválido." });

  if (password.length < 8 || password.length > 30)
    return res.status(400).json({ message: "Senha inválida" });

  try {
    await database.user.create({
      data: { name, email, password },
    });
  } catch (error) {
    console.log(error);
    return res.status(502).json({ message: "Erro ao cadastrar" });
  }

  return res.status(201).json({ message: "Usuário criado com sucesso!" });
}
