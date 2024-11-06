import React, {FormEvent} from 'react';
import {loginUser} from "../../services/login/login.service.ts";
import {useNavigate} from "react-router";

const LoginPage: React.FC = () => {

    const navigate = useNavigate();

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        const username = e.currentTarget.inpUserName.value;
        const password = e.currentTarget.inpPassword.value;


        loginUser(username, password).then((token) => {
            alert(token);
            localStorage.setItem("accessToken", token);
        })

        e.preventDefault();
        navigate('/dashboard')

    }

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