"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
async function ensureAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken)
        return res.status(400).json({ message: "não autorizado" });
    const token = authToken.split(" ")[1];
    try {
        (0, jsonwebtoken_1.verify)(token, process.env.KEY);
        return next();
    }
    catch (err) {
        res.status(401).json({ message: "não autorizado" });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=ensureAuthenticated.js.map