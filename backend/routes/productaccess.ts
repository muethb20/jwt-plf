import express, {Request, Response} from 'express';
import {products} from "../mockdata/products.mockdata";
import {authenticateToken} from "../util/jwt/jwt.service";
import {getProductsFromUser} from "../util/product/product.service";
import {AccessTokenInterface} from "../interfaces/accessToken.interface";

let router = express.Router();

router.get('/', authenticateToken,(req: Request, res: Response) => {
    const accessToken = req.body as AccessTokenInterface;
    const user = accessToken.user;
        res.status(201).send(getProductsFromUser(user));
})
export default router;