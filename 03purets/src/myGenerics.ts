const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: string): string {
  return val;
}

function identityTwo(val: boolean | number): boolean | number {
  return val;
}

function identityThree(val: any): any {
  return val;
}

function identityFour<Type>(val: Type): Type {
  return val;
}

function identityFive<T>(val: T): T {
  return val;
}

// identityFive(9);
// identityFive("9");
// identityFive("ram");
identityFive(true);

interface Bottle {
  brand: string;
  type: number;
}

identityFive<Bottle>({ brand: "xyz", type: 8 });

// generics usage in functions and arrow functions

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  // return products[3]
  return products[myIndex];
}

// const getMoreSearchProducts = <T>(products: T[]): T => {
//   // do some database operations
//   const myIndex = 5;
//   return products[myIndex];
// };

// most followed syntax with slight change <T,> instead of <T> to differentiate generic from regular jsx tag (functionality remains same) while working with react
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 5;
  return products[myIndex];
};
