// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// let seat;

// if (seat === AISLE) {
//   console.log(`your seat is ${AISLE}`);
// }

// better choice will be enums

// enum SeatChoice {
//   AISLE,
//   MIDDLE,
//   WINDOW,
//   FOURTH,
// }

// enum SeatChoice {
//   AISLE = 11,
//   MIDDLE,
//   WINDOW,
//   FOURTH,
// }

// enum SeatChoice {
//   AISLE = 11,
//   MIDDLE = 22,
//   WINDOW,
//   FOURTH,
// }

// enum SeatChoice {
//   AISLE = 11,
//   MIDDLE = "middle",
//   WINDOW = "window",
//   FOURTH = 0,
// }

// enum SeatChoice {
//   AISLE = "aisle",
//   MIDDLE = "middle",
//   WINDOW = "window",
//   FOURTH = 0,
// }

// enum SeatChoice {
//   AISLE = "aisle",
//   MIDDLE = 3,
//   WINDOW,
//   FOURTH,
// }
// // produces lot of code in complied js file

// const ramSeat = SeatChoice.WINDOW;

// to avoid lot of code compilation into js file, insert const before enum
const enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const ramSeat = SeatChoice.WINDOW;

// other use cases ** database cases providing more options, designing navbar/menu bar

export {};
