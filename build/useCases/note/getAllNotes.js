"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotes = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function getAllNotes(req, res) {
    try {
        const notes = await PrismaClient_1.prisma.note.findMany();
        res.status(200).json({ notes });
    }
    catch (error) {
        return res.status(501).json({ message: "Erro: tente novamente" });
    }
}
exports.getAllNotes = getAllNotes;
//# sourceMappingURL=getAllNotes.js.map