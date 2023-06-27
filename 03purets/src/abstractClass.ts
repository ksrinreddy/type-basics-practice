// class

// class TakePhoto {
//     constructor(
//         cameraMode: string,
//         filter: string
//     ){}
// }

// const rr = new TakePhoto('r', 'rr')

// class Instagram extends TakePhoto {

// }

// abstract class
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    // some calculations
    return 7;
  }
}

// const rr = new TakePhoto("r", "rr");

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia");
  }
}
const rr = new Instagram("r", "rr", 8);

rr.getReelTime();
