"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// Declare an array for coaches ... initially empty
let theCoaches = [];
// Add coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}