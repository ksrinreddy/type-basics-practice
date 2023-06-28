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
