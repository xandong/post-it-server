import { Router } from "express";
import { createUser } from "../../app/stories/user/createUser";
import { deleteUser } from "../../app/stories/user/deleteUser";
import { getAllUsers } from "../../app/stories/user/getAllUsers";
import { getUserById } from "../../app/stories/user/getUserByID";
import { updateUser } from "../../app/stories/user/updateUser";

export const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

userRouter.put("/", updateUser);

userRouter.delete("/:id", deleteUser);
