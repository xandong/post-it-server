"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function deleteNote(req, res) {
    const { id } = req.params;
    try {
        const isValidNote = await PrismaClient_1.prisma.note.findUnique({ where: { id } });
        if (!isValidNote) {
            return res.status(404).json({ message: "Nota não encontrada." });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
    try {
        await PrismaClient_1.prisma.note.delete({ where: { id } });
        return res.status(200).json({ message: `Nota excluída com sucesso.` });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.deleteNote = deleteNote;
//# sourceMappingURL=deleteNote.js.map