import { Request, Response } from "express";
import { prisma } from "../../prisma/PrismaClient";

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user)
      return res.status(401).json({ message: "Usuário não encontrado." });

    prisma.user.delete({ where: { id } });

    return res.status(200).json({ message: "Usuário excluído com sucesso." });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Erro ao excluir" });
  }
}
