
let sports : string[] = ["Cricket", "FootBall", "Swmming", "Cycling"];
/*
for (let i=0; i<sports.length;i++){
    console.log(sports[i]);
}
console.log("------------------------------------------------------------")
*/
// Lets use simplified version of for loop

for(let tempSport of sports){
   if(tempSport == "Cricket"){
    console.log(tempSport+" << My Favourite Game");
   }
   else{
    console.log(tempSport);
   }
}