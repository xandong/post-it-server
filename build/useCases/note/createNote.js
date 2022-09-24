"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function createNote(req, res) {
    const { title, description, content, authorId } = req.body;
    if (!title || !description)
        return res
            .status(400)
            .json({ message: "Campos título e descrição são obrigatórios." });
    if (!authorId)
        return res.status(400).json({ message: "Id do author é necessário." });
    let author;
    try {
        author = await PrismaClient_1.prisma.user.findUnique({ where: { id: authorId } });
        if (!author)
            return res.status(400).json({ message: "Author não existe" });
    }
    catch (error) {
        res.status(500).json({ message: "Erro. Tente novamente." });
    }
    try {
        await PrismaClient_1.prisma.note.create({
            data: {
                authorId,
                title,
                description,
                content,
            },
        });
        return res.status(201).json({ message: "Nota criada com sucesso." });
    }
    catch (err) {
        res.status(500).json({ message: "Erro. Tente novamente." });
    }
}
exports.createNote = createNote;
//# sourceMappingURL=createNote.js.map