import {AccessTokenInterface} from "../../interfaces/accessToken.interface.ts";

export const verifyAccessToken = (token: string): AccessTokenInterface => {
    const payloadBase64 = token?.split(".")[1];
    return JSON.parse(atob(payloadBase64)) as AccessTokenInterface
}