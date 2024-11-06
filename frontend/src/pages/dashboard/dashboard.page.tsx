import * as React from 'react';
import {useEffect, useState} from "react";
import {User} from "../../interfaces/user.interface.ts";
import {verifyAccessToken} from "../../services/jwt/jwt.service.ts";
import {useSearchParams} from "react-router-dom";

const DashboardPage: React.FC = () => {

    const [user, setUser] = useState<User>()

    //const routeParams = useParams();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const accessToken = searchParams.get('accessToken');

        if (accessToken){
            setUser(verifyAccessToken(accessToken).user);
        }

    }, []);

    if (user) {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>User: {user?.role}</h2>
            </div>
        );
    }  else {
        return (
            <h3 style={{color: "crimson"}}>No query params found!</h3>
        )
    }

};

export default DashboardPage;