import axios from "axios";
import {Product} from "../../interfaces/product.interface.ts";

export const getProducts = async (accessToken: string):Promise<Product[]> => {
    const response = await axios.get('http://localhost:3000/products', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    });

    return response.data;
}