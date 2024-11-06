import * as jwt from 'jsonwebtoken';
import {AccessTokenInterface} from "../../interfaces/accessToken.interface.ts";

export const verifyAccessToken = (token: string): AccessTokenInterface => {
    return jwt.verify(token, "AEIOU") as AccessTokenInterface;
}