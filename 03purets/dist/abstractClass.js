"use strict";
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
class TakePhoto {
    constructor(cameraMode, filter) { }
    getReelTime() {
        // some calculations
        return 7;
    }
}
// const rr = new TakePhoto("r", "rr");
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const rr = new Instagram("r", "rr", 8);
rr.getReelTime();
