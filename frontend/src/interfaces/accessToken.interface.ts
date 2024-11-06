import {User} from "./user.interface";

export interface AccessTokenInterface {
    user: User,
    iat: number,
    exp: number
}