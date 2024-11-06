import React, {FormEvent, useEffect, useState} from 'react';
import {loginUser} from "../../services/login/login.service.ts";
import {useNavigate} from "react-router";

const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState<string>();


    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        const username = e.currentTarget.inpUserName.value;
        const password = e.currentTarget.inpPassword.value;
        e.preventDefault();


        loginUser(username, password).then((token) => {
            // Token trotzdem setzen -> Produktseite greift noch darauf zu
            localStorage.setItem('accessToken', token)
            setAccessToken(token);
        });
    }

    useEffect(() => {
        if (accessToken) {
            navigate(`/dashboard?accessToken=${accessToken}`);
        }
    }, [accessToken]);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="inpUserName">Username:</label>
                <br/>

                <input type={"text"} className={"inpUsername"} id={"inpUserName"}/>

                <br/>

                <label htmlFor="inpPassword">Password: </label>
                <br/>

                <input type={"password"} className={"inpPassword"} id={"inpPassword"}/>
                <br/>
                <br/>

                <button type={"submit"}>Login</button>
            </form>

        </div>
    );
};

export default LoginPage;