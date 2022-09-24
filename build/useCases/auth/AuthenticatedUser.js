"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticated = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
async function Authenticated(req, res) {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: "Campos obrigatórios" });
    const userSearched = await PrismaClient_1.prisma.user.findUnique({ where: { email } });
    if (!userSearched) {
        return res.status(400).json({ message: "Email ou senha incorreto" });
    }
    const passwordMatch = await (0, bcryptjs_1.compare)(password, userSearched.password);
    if (!passwordMatch) {
        return res.status(400).json({ message: "Email ou senha incorreto" });
    }
    const key = process.env.KEY;
    const token = (0, jsonwebtoken_1.sign)({}, key, {
        subject: userSearched.id,
        expiresIn: 120,
    });
    return res.status(200).json({ token });
}
exports.Authenticated = Authenticated;
//# sourceMappingURL=AuthenticatedUser.js.map