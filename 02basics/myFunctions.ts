// function addTwo(num) {
//   // should not be allowed
//   num.toUpperCase();

//   return num + 2;
// }
// // addTwo(5);

// // should not be allowed
// addTwo("5");

// input varible type should be specified
function addTwo(num: number): number {
  // num.toUpperCase();
  return num + 2;
  // to avoid the following, which should not allowed, we should also specify type of function return along with type of input variable(s)
  // return "hello";
}

// addTwo("5");
addTwo(5);

// function with string
function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("ram", "ram@gmail.com", false);

// passing default values
const loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("ram", "ram@email.com");

// case of multiple return types
// function getValue(myVal: number): string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

// example with arrow function
const sayHello = (s: string): string => {
  return "";
};

const heros = ["ram", "arjun", "karna"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `the hero is ${hero}`;
});
export {};

// return type - void (log error)
function consoleError(errMsg: string): void {
  console.log(errMsg);
  // return 1;
}

// retrun type - never (handle error) - functions never return a value
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
