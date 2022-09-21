import { Request, Response } from "express";

export async function deleteNote(req: Request, res: Response) {
  const { id } = req.params;

  console.log(`ID: ${id}`);
  return res.status(200).json({ message: "Nota excluída com sucesso." });
}
