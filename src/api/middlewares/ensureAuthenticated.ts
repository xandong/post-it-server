import { NextFunction, Request, response, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(400).json({ message: "não autorizado" });

  const token = authToken.split(" ")[1];

  try {
    verify(token, process.env.KEY!);

    return next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "não autorizado" });
  }
}
