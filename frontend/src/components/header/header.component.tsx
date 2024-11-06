import * as React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent: React.FC = () => {
    return (
        <div>
            <h1>Product Access</h1>
            <Link to={'/dashboard'}>Dashboard</Link>
            <br/>
            <Link to={'/products'}>Products</Link>
            <br/>
            <Link to={'/login'}>Login</Link>
            <br/>
            {/*<Link<button onClick={() => {localStorage.setItem("accessToken", "")}}>Logout!!</button>*/}
        </div>
    );
};

export default HeaderComponent;