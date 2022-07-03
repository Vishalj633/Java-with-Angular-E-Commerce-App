let reviews : number [] = [4,5,3.5,8,9];

let total : number = 0;

for (let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let average : number = total/reviews.length;

console.log("Average review : "+average);