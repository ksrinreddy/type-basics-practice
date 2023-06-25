"use strict";
// function addTwo(num) {
//   // should not be allowed
//   num.toUpperCase();
Object.defineProperty(exports, "__esModule", { value: true });
//   return num + 2;
// }
// // addTwo(5);
// // should not be allowed
// addTwo("5");
// input varible type should be specified
function addTwo(num) {
    // num.toUpperCase();
    return num + 2;
    // to avoid the following, which should not allowed, we should also specify type of function return along with type of input variable(s)
    // return "hello";
}
// addTwo("5");
addTwo(5);
// function with string
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, isPaid) { }
signUpUser("ram", "ram@gmail.com", false);
// passing default values
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("ram", "ram@email.com");
// case of multiple return types
// function getValue(myVal: number): string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
// example with arrow function
var sayHello = function (s) {
    return "";
};
var heros = ["ram", "arjun", "karna"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "the hero is ".concat(hero);
});
// return type - void (log error)
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1;
}
// retrun type - never (handle error) - functions never return a value
function handleError(errMsg) {
    throw new Error(errMsg);
}
