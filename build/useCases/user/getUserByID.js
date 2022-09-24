"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function getUserById(req, res) {
    const { id } = req.params;
    try {
        const user = await PrismaClient_1.prisma.user.findUnique({ where: { id } });
        if (!user)
            return res.status(404).json({ message: "Usuário não encontrado." });
        return res.status(200).json({ user });
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.getUserById = getUserById;
//# sourceMappingURL=getUserByID.js.map