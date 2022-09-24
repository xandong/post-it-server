"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function updateNote(req, res) {
    const { id, title, description, content } = req.body;
    try {
        const isNoteExists = await PrismaClient_1.prisma.note.findUnique({ where: { id } });
        if (!isNoteExists)
            return res.status(404).json({ message: "Nota não encontrada." });
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
    const newData = new Object();
    if (title) {
        newData.title = title;
    }
    if (description) {
        newData.description = description;
    }
    if (content) {
        newData.content = content;
    }
    try {
        const content = await PrismaClient_1.prisma.note.update({
            where: { id },
            data: newData,
        });
        return res.status(200).json({ note: content });
    }
    catch (error) {
        return res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.updateNote = updateNote;
//# sourceMappingURL=updateNotes.js.map