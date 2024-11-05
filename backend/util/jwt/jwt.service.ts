import dotenv from "dotenv";
import {User} from "../../interfaces/user.interface";
import jwt, {JwtPayload} from 'jsonwebtoken';
import {AccessTokenInterface} from "../../interfaces/accessToken.interface";

dotenv.config();

const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET || "AEIOU";

export const generateAccessToken = (user: User): string => {
    return jwt.sign({user: user}, JWT_AUTH_SECRET, {expiresIn: 100000});
}

export const verifyAccessToken = (bearerToken: string): AccessTokenInterface => {
    const accessToken = bearerToken.split(' ')[1];
    return jwt.verify(accessToken, JWT_AUTH_SECRET) as AccessTokenInterface;
}