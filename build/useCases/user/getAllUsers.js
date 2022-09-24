"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const PrismaClient_1 = require("../../api/middlewares/prisma/PrismaClient");
async function getAllUsers(req, res) {
    try {
        const users = await PrismaClient_1.prisma.user.findMany();
        return res.status(200).json({ users });
    }
    catch (error) {
        return res.status(501).json({ message: "Erro. Tente novamente." });
    }
}
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=getAllUsers.js.map