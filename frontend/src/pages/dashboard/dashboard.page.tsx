import * as React from 'react';
import {useEffect, useState} from "react";
import {User} from "../../interfaces/user.interface.ts";
import {verifyAccessToken} from "../../services/jwt/jwt.service.ts";

const DashboardPage: React.FC = () => {

    const [user, setUser] = useState<User>()

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken){
            setUser(verifyAccessToken(accessToken).user);
        }

    }, [user]);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>User: {user?.role}</h2>
        </div>
    );
};

export default DashboardPage;