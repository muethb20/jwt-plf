import * as React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent: React.FC = () => {
    return (
        <>
            <h1>Product Access</h1>

            <div style={{display: "flex"}}>
                <div style={{flex: 1}}>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </div>

                <div style={{flex: 1}}>
                <Link to={'/products'}>Products</Link>
                </div>

                <div style={{flex: 1}}>
                <Link to={'/login'}>Login</Link>
                </div>

                {/*<Link<button onClick={() => {localStorage.setItem("accessToken", "")}}>Logout!!</button>*/}
            </div>
        </>
    );
};

export default HeaderComponent;