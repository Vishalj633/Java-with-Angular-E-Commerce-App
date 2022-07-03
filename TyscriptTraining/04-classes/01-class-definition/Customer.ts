class Customer {

    firstName : string;
    lastName : string;

    // let's use constructor 
    constructor(theFirstName : string, theLastName : string){
        this.firstName=theFirstName;
        this.lastName=theLastName;
    }
}

// let's create an instance
/*
let myCustomer = new Customer();
 
myCustomer.firstName="Vishal";
myCustomer.lastName="Jagadale";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/

let myCustomer = new Customer ("Vishal","Jagadale");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);