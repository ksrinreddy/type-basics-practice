interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// inheritance
// adding more properties to (already existing) interface (reopening of interface)
interface User {
  githubToken: string;
}

// extends
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// let ram: User = {
//   dbId: 88,
//   email: "ram@email.com",
//   userId: 7739,
//   githubToken: "github",
//   startTrial: () => {
//     return "trial started";
//   },
//   getCoupon: (name: "ram10", off: 10) => {
//     return 10;
//   },
// };
// ram.email = "ram@gmail.com";

let ram: Admin = {
  dbId: 88,
  email: "ram@email.com",
  userId: 7739,
  githubToken: "github",
  role: "admin",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "ram10", off: 10) => {
    return 10;
  },
};
ram.email = "ram@gmail.com";
// ram.dbId = 67

export {};
