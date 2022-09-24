"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthenticatedUser_1 = require("../../useCases/auth/AuthenticatedUser");
const noteRouter_1 = require("./noteRouter");
const userRouter_1 = require("./userRouter");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => res.json({ message: "Bem vindo a API!" }));
exports.router.use("/users", userRouter_1.userRouter);
exports.router.use("/notes", noteRouter_1.noteRouter);
exports.router.post("/auth", AuthenticatedUser_1.Authenticated);
//# sourceMappingURL=router.js.map