import express, {Request, Response} from 'express';
import {products} from "../mockdata/products.mockdata";
import {verifyAccessToken} from "../util/jwt/jwt.service";
import {getProductsFromUser} from "../util/product/product.service";

let router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const accessToken = req.headers.authorization;

    try {
        if (accessToken) {
            const user = verifyAccessToken(accessToken).user;
            res.status(201).send(getProductsFromUser(user));
        } else {
            res.status(403).json({"error": "No Authorization provided!"})
        }
    }catch (error) {
        res.status(401).send("Invalid Signature!");
    }


})
export default router;