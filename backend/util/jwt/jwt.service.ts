import dotenv from "dotenv";
import {User} from "../../interfaces/user.interface";
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from "express";

dotenv.config();

const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET || "SECRET_PASSWORD";

export const generateAccessToken = (user: User): string => {
    return jwt.sign({user: user}, JWT_AUTH_SECRET, {expiresIn: 100000});
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (token == null){
        res.sendStatus(401);
    } else {
        jwt.verify(token, JWT_AUTH_SECRET, (err: any, accessToken: any) => {
            if (err) {
                res.sendStatus(403);
            }

            req.body = accessToken;
            next();
        })
    }
}