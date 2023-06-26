// let user: (string | number)[] = [7, "ram"];
// let user: [string, number] = ["ram", 7];
let user: [string, number, boolean] = ["ram", 7, true];

// in addition to types, values must be assigned in specific order in tuples, else throws error
// let user: [string, number, boolean] = [7, true, "ram"];

// some use cases
let rgb: [number, number, number] = [255, 141, 100];

type User = [number, string];

const newUser: User = [77, "ram@email.com"];
// can be overwritten, be aware
newUser[1] = "raghav@email.com";

// newUser.push(true);

export {};
