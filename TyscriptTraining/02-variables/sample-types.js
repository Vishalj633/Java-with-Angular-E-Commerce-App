var found = true;
var grade = 88.6;
var firstName = "Vishal";
var lastName = "Jagadale";
// lets break it
// Even if error is there complier will generate .js file
// To avoid this tsc -noEmitOnError sample-types.ts
/*
found=0;
grade=A;
firstName=false;
*/
console.log(found);
console.log("Your grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// Use templet strings 
console.log("Hi ".concat(firstName, " ").concat(lastName));
