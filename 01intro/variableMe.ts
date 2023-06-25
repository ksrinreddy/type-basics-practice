let greetings: string = "hello ram";

greetings.toLowerCase();
console.log(greetings);

// let userId:number = 39933;
// no need to specify type here, its too redundant. (you are assigning a number to userId and typescript smartly derives type inference from the assigned value. for example like below)

let userId = 39933;
userId.toFixed();
userId = "ram";

// boolean
let isLoggedIn: boolean = false;
// isLoggedIn.

export {};
