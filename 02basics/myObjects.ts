// working with objects in typescript

// const user = {
//   name: "ram",
//   email: "ram@email.com",
//   isActive: true,
// };

// // function parameters type
// function createUser({ name: string, isPaid: boolean }) {}
// // createUser({ name: "ram", isPaid: false });

// // add one more parameter to function (throws warning)
// // createUser({name: 'ram', isPaid: false, email: 'ram@email.com'}) {};

// // does not throw the warning! (odd behaviour)
// let newUser = {
//   name: "ram",
//   isPaid: false,
//   email: "ram@email.com",
// };
// createUser(newUser);

// // function return type
// function createCourse(): { name: string; price: number } {
//   return { name: "typescript", price: 299 };
// }

// TYPE ALIASES

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

// ******* readonly, ? (optional), type with combination of other types *******
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "ram",
  email: "ram@email.com",
  isActive: false,
};

myUser.email = "raghav@email.com";
// myUser._id = "ruweou";

// combining types
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

export {};
