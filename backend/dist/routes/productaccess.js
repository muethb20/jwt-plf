"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_service_1 = require("../util/jwt/jwt.service");
const product_service_1 = require("../util/product/product.service");
let router = express_1.default.Router();
router.get('/', (req, res) => {
    const accessToken = req.headers.authorization;
    try {
        if (accessToken) {
            const user = (0, jwt_service_1.verifyAccessToken)(accessToken).user;
            res.status(201).send((0, product_service_1.getProductsFromUser)(user));
        }
        else {
            res.status(403).json({ "error": "No Authorization provided!" });
        }
    }
    catch (error) {
        res.status(401).send("Invalid Signature!");
    }
});
exports.default = router;
