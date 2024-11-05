import {Product} from "../../interfaces/product.interface";
import {products} from "../../mockdata/products.mockdata";
import {User} from "../../interfaces/user.interface";

export const getProductsFromUser = (user: User): Product[] => {
    let responseProducts: Product[] = [];

    switch (user.role) {
        case "admin":
            responseProducts = products;
            break;
        case "employee1":
            responseProducts.push(products[0])
            break;

        case "employee2":
            responseProducts.push(products[1])
            break;


    }

    return responseProducts;
}