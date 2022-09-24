"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const bcryptjs_1 = require("bcryptjs");
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function createUser(req, res) {
    const { name, email, password } = req.body;
    const formatEmailValid = /\S+@\S+\.\S+/;
    if (!name || !email || !password)
        return res.status(400).json({ message: "Campos obrigatórios" });
    if (!formatEmailValid.test(email))
        return res.status(400).json({ message: "Email inválido" });
    try {
        const checkIfEmailAlreadyExists = await PrismaClient_1.prisma.user.findUnique({
            where: { email },
        });
        if (checkIfEmailAlreadyExists)
            return res.status(400).json({ message: "Email já cadastrado" });
    }
    catch (error) {
        return res.status(501).json({ message: "Erro. Tente novamente" });
    }
    if (password.length < 8)
        return res.status(400).json({ message: "Senha inválida" });
    const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
    try {
        await PrismaClient_1.prisma.user.create({
            data: { name, email, password: passwordHash },
        });
        return res.status(201).json({ message: "Usuário cadastrado com sucesso." });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro. Tente novamente" });
    }
}
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map