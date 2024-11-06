import * as React from 'react';
import {useEffect, useState} from "react";
import {User} from "../../interfaces/user.interface.ts";
import {verifyAccessToken} from "../../services/jwt/jwt.service.ts";
import {Product} from "../../interfaces/product.interface.ts";
import {getProducts} from "../../services/products/product.service.ts";

const ProductsPage: React.FC = () => {

    const [user, setUser] = useState<User>()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken){
            setUser(verifyAccessToken(accessToken).user);

           getProducts(accessToken).then(products => setProducts(products));
        }
    }, [])

    return (
        <div>
            <h2>Products for user: {user?.email}</h2>
            <ul>
                {products.map((p:Product)=>
                    (<li key={p.id}>{p.name} - {p.msg}</li>))}
            </ul>
        </div>
    );
};

export default ProductsPage;