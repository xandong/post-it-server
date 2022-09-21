import { Router } from "express";
import { noteRouter } from "./noteRouter";
import { userRouter } from "./userRouter";

export const router = Router();

router.get("/", (req, res) => res.json({ message: "Bem vindo a API!" }));
router.use("/users", userRouter);
router.use("/notes", noteRouter);
