// union in variables
let score: number | string = 44;

score = 55;
score = "88";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let ram: User | Admin = {
  name: "raghuram",
  id: 4,
};

ram = {
  username: "rr",
  id: 4,
};

// union in functions
// function getDbId(id: number | string) {
//   // making some api calls
//   console.log(`this is DB id ${id}`);
// }

// getDbId(89);
// getDbId("89");

// function getDbId(id: number | string) {
//   id.toLowerCase();
// //   throws warning
// }
function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// union in arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", 3];
const data4: (string | number | boolean)[] = ["1", "2", 3, false];
export {};

// other
// let pi:3.14 = 3.14;
// pi = 3.145

// other use cases
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew ";
