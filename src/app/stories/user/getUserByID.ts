import { Request, Response } from "express";

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  console.log(id);

  return res.status(200).json({ message: id });
}
