"use strict";
// class User {
//   public name: string;
//   email: string;
//   // readonly city: string = "delhi";
//   private readonly city: string = "delhi";
//   constructor(name: string, email: string) {
//     // this.name = name;
//     this.name = name;
//     this.email = email;
//     this.city
//   }
// }
// alternate best practice
class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "delhi";
        // private _courseCount = 1;
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    // A 'set' accessor can not have a return type annotation
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
const ram = new User("ram", "ram@email.com", "ram99");
// ram.city = 'mumbai'
// ram.city
// ram.name
// ram.deleteToken()
// inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 3;
    }
}
