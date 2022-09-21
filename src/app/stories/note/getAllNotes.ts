import { Request, Response } from "express";

export async function getAllNotes(req: Request, res: Response) {
  return res.status(200).json({ message: "Todos as notas" });
}
