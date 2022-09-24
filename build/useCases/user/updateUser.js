"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const bcryptjs_1 = require("bcryptjs");
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function updateUser(req, res) {
    const { id, name, email, password } = req.body;
    try {
        const userExists = await PrismaClient_1.prisma.user.findUnique({ where: { id } });
        if (!userExists)
            return res.status(404).json({ message: "Usuário não encontrado." });
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
    const newData = new Object();
    if (name) {
        newData.name = name;
    }
    if (email) {
        newData.email = email;
    }
    if (password) {
        if (password.length < 30 && password.length > 7) {
            const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
            newData.password = passwordHash;
        }
        else
            return res.status(400).json({ message: "Erro. Campos inválidos" });
    }
    try {
        const newUser = await PrismaClient_1.prisma.user.update({
            where: { id },
            data: newData,
        });
        return res.status(200).json({ user: newUser });
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.js.map