"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const isValidUser = await PrismaClient_1.prisma.user.findUnique({ where: { id } });
        if (!isValidUser) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
    try {
        await PrismaClient_1.prisma.user.delete({ where: { id } });
        return res.status(200).json({ message: `Usuário excluído com sucesso.` });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=deleteUser.js.map