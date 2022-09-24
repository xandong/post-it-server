"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteById = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function getNoteById(req, res) {
    const { id } = req.params;
    try {
        const note = await PrismaClient_1.prisma.note.findUnique({ where: { id } });
        if (!note)
            return res.status(404).json({ message: "Nota não encontrada." });
        return res.status(200).json({ note });
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.getNoteById = getNoteById;
//# sourceMappingURL=getNoteByID.js.map