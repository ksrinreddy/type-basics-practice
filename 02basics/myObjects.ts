// working with objects in typescript

const user = {
  name: "ram",
  email: "ram@email.com",
  isActive: true,
};

// function parameters type
function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "ram", isPaid: false });

// add one more parameter to function (throws warning)
// createUser({name: 'ram', isPaid: false, email: 'ram@email.com'}) {};

// does not throw the warning! (odd behaviour)
let newUser = {
  name: "ram",
  isPaid: false,
  email: "ram@email.com",
};
createUser(newUser);

// function return type
function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 299 };
}

export {};
