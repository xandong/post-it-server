"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const createUser_1 = require("../../useCases/user/createUser");
const deleteUser_1 = require("../../useCases/user/deleteUser");
const getAllUsers_1 = require("../../useCases/user/getAllUsers");
const getUserByID_1 = require("../../useCases/user/getUserByID");
const updateUser_1 = require("../../useCases/user/updateUser");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", getAllUsers_1.getAllUsers);
exports.userRouter.get("/:id", 
//  ensureAuthenticated,
getUserByID_1.getUserById);
exports.userRouter.post("/", createUser_1.createUser);
exports.userRouter.put("/", 
// ensureAuthenticated,
updateUser_1.updateUser);
exports.userRouter.delete("/:id", 
// ensureAuthenticated,
deleteUser_1.deleteUser);
//# sourceMappingURL=userRouter.js.map