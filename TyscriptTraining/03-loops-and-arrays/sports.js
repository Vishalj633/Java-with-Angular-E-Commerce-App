var sports = ["Cricket", "FootBall", "Swmming", "Cycling"];
/*
for (let i=0; i<sports.length;i++){
    console.log(sports[i]);
}
console.log("------------------------------------------------------------")
*/
// Lets use simplified version of for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favourite Game");
    }
    else {
        console.log(tempSport);
    }
}
