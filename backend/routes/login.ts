import express, {Request, Response} from 'express'
import {User} from "../interfaces/user.interface";
import {generateAccessToken} from "../util/jwt/jwt.service";
import {users} from "../mockdata/users.mockdata";

let router = express.Router();

router.post('/', (req: Request, res: Response): void => {
    let user: User = req.body;

    if (user.email == undefined || user.password == undefined) {
        res.status(403).json({ "error": "User Information missing!" }); // Corrected this line
    } else {

        let loggedInUser:User|undefined = users.find((value: User) => value.email==user.email && value.password==user.password)

        if (loggedInUser == undefined) {
            res.status(403).send("User not found!");
        } else {
            const accessToken = generateAccessToken(loggedInUser);

            res.status(200).json({ accessToken: accessToken });
        }
    }
});


export default router;