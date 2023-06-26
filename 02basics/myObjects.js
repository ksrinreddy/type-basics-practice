"use strict";
// working with objects in typescript
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "ram",
    email: "ram@email.com",
    isActive: true,
};
// function parameters type
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({ name: "ram", isPaid: false });
// add one more parameter to function (throws warning)
// createUser({name: 'ram', isPaid: false, email: 'ram@email.com'}) {};
// does not throw the warning! (odd behaviour)
var newUser = {
    name: "ram",
    isPaid: false,
    email: "ram@email.com",
};
createUser(newUser);
// function return type
function createCourse() {
    return { name: "typescript", price: 299 };
}
