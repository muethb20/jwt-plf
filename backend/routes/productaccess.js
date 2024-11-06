"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_service_1 = require("../util/jwt/jwt.service");
const product_service_1 = require("../util/product/product.service");
let router = express_1.default.Router();
router.get('/', jwt_service_1.authenticateToken, (req, res) => {
    const accessToken = req.body;
    const user = accessToken.user;
    res.status(201).send((0, product_service_1.getProductsFromUser)(user));
});
exports.default = router;
