"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateAccessToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET || "SECRET_PASSWORD";
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ user: user }, JWT_AUTH_SECRET, { expiresIn: 100000 });
};
exports.generateAccessToken = generateAccessToken;
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (token == null) {
        res.sendStatus(401);
    }
    else {
        jsonwebtoken_1.default.verify(token, JWT_AUTH_SECRET, (err, accessToken) => {
            if (err) {
                res.sendStatus(403);
            }
            req.body = accessToken;
            next();
        });
    }
}
exports.authenticateToken = authenticateToken;
