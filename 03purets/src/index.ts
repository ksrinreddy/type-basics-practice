// class User {
//   public name: string;
//   email: string;
//   // readonly city: string = "delhi";
//   private readonly city: string = "delhi";
//   constructor(name: string, email: string) {
//     // this.name = name;
//     this.name = name;
//     this.email = email;
//     this.city
//   }
// }

// alternate best practice
class User {
  readonly city: string = "delhi";
  // private _courseCount = 1;
  protected _courseCount = 1;

  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  // A 'set' accessor can not have a return type annotation
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("course count should be more than one");
    }
    this._courseCount = courseNum;
  }
}

const ram = new User("ram", "ram@email.com", "ram99");
// ram.city = 'mumbai'
// ram.city
// ram.name

// ram.deleteToken()

// inheritance
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 3;
  }
}
