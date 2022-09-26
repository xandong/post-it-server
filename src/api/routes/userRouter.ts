import { Router } from "express";
import { createUser } from "../../useCases/user/createUser";
import { deleteUser } from "../../useCases/user/deleteUser";
import { getAllNotesByUser } from "../../useCases/user/getAllNotesByUser";
import { getAllUsers } from "../../useCases/user/getAllUsers";
import { getUserById } from "../../useCases/user/getUserByID";
import { updateUser } from "../../useCases/user/updateUser";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", ensureAuthenticated, getUserById);

userRouter.get("/notes/:id", getAllNotesByUser);

userRouter.post("/", createUser);

userRouter.put("/", ensureAuthenticated, updateUser);

userRouter.delete("/:id", ensureAuthenticated, deleteUser);
