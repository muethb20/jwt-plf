"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.generateAccessToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET || "AEIOU";
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ user: user }, JWT_AUTH_SECRET, { expiresIn: 100000 });
};
exports.generateAccessToken = generateAccessToken;
const verifyAccessToken = (bearerToken) => {
    const accessToken = bearerToken.split(' ')[1];
    return jsonwebtoken_1.default.verify(accessToken, JWT_AUTH_SECRET);
};
exports.verifyAccessToken = verifyAccessToken;
