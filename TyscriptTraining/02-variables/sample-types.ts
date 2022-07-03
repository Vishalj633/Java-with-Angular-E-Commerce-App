let found : boolean = true;
let grade : number = 88.6;
let firstName :  string = "Vishal";
let lastName : string = "Jagadale";


// lets break it
// Even if error is there complier will generate .js file
// To avoid this tsc -noEmitOnError sample-types.ts
/*
found=0;
grade=A;
firstName=false;
*/
console.log(found);
console.log("Your grade is "+grade);
console.log("Hi "+firstName+" "+lastName);

// Use templet strings 
console.log(`Hi ${firstName} ${lastName}`);
