import { Request, Response } from "express";

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  return res.status(200).json({ message: "Usuário excluído com sucesso." });
}
