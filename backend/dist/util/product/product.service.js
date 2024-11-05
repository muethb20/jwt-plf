"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsFromUser = void 0;
const products_mockdata_1 = require("../../mockdata/products.mockdata");
const getProductsFromUser = (user) => {
    let responseProducts = [];
    switch (user.role) {
        case "admin":
            responseProducts = products_mockdata_1.products;
            break;
        case "employee1":
            responseProducts.push(products_mockdata_1.products[0]);
            break;
        case "employee2":
            responseProducts.push(products_mockdata_1.products[1]);
            break;
    }
    return responseProducts;
};
exports.getProductsFromUser = getProductsFromUser;
