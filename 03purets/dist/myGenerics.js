"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
// identityFive(9);
// identityFive("9");
// identityFive("ram");
identityFive(true);
identityFive({ brand: "xyz", type: 8 });
// generics usage in functions and arrow functions
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    // return products[3]
    return products[myIndex];
}
// const getMoreSearchProducts = <T>(products: T[]): T => {
//   // do some database operations
//   const myIndex = 5;
//   return products[myIndex];
// };
// most followed syntax with slight change <T,> instead of <T> to differentiate generic from regular jsx tag (functionality remains same) while working with react
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 5;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(2, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
