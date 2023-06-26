"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let user: (string | number)[] = [7, "ram"];
// let user: [string, number] = ["ram", 7];
var user = ["ram", 7, true];
// in addition to types, values must be assigned in specific order in tuples, else throws error
// let user: [string, number, boolean] = [7, true, "ram"];
// some use cases
var rgb = [255, 141, 100];
var newUser = [77, "ram@email.com"];
// can be overwritten, be aware
newUser[1] = "raghav@email.com";
