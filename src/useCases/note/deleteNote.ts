import { Request, Response } from "express";
import { prisma } from "../../api/middlewares/prisma/PrismaClient";

export async function deleteNote(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const isValidNote = await prisma.note.findUnique({ where: { id } });

    if (!isValidNote) {
      return res.status(404).json({ message: "Nota não encontrada." });
    }
  } catch (error) {
    return res.status(502).json({ message: "Erro externo. Tente novamente." });
  }

  try {
    await prisma.note.delete({ where: { id } });

    return res.status(200).json({ message: `Nota excluída com sucesso.` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Erro externo. Tente novamente." });
  }
}
