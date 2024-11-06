"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_service_1 = require("../util/jwt/jwt.service");
const users_mockdata_1 = require("../mockdata/users.mockdata");
let router = express_1.default.Router();
router.post('/', (req, res) => {
    let user = req.body;
    if (user.email == undefined || user.password == undefined) {
        res.status(403).json({ "error": "User Information missing!" }); // Corrected this line
    }
    else {
        let loggedInUser = users_mockdata_1.users.find((value) => value.email == user.email && value.password == user.password);
        if (loggedInUser == undefined) {
            res.status(403).send("User not found!");
        }
        else {
            const accessToken = (0, jwt_service_1.generateAccessToken)(loggedInUser);
            res.status(200).json({ accessToken: accessToken });
        }
    }
});
exports.default = router;
