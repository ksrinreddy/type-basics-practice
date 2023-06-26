"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union in variables
var score = 44;
score = 55;
score = "88";
var ram = {
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
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// union in arrays
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3];
var data4 = ["1", "2", 3, false];
// other
// let pi:3.14 = 3.14;
// pi = 3.145
// other use cases
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew ";
