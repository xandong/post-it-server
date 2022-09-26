import { Router } from "express";
import { Authenticated } from "../../useCases/auth/AuthenticatedUser";
import { noteRouter } from "./noteRouter";
import { userRouter } from "./userRouter";

export const router = Router();

router.get("/", (req, res) =>
  res.json({ message: "Bem vindo a API Post it!" })
);
router.use("/users", userRouter);
router.use("/notes", noteRouter);
router.post("/auth", Authenticated);
