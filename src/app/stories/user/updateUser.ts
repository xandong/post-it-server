import { Request, Response } from "express";
import { UserModel } from "../../../core/models/UserModel";

export async function updateUser(req: Request, res: Response) {
  const user: UserModel = req.body;

  console.log(user);
  return res.status(200).json({ message: user });
}
