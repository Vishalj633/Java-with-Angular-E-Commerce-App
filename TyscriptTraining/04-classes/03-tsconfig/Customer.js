"use strict";
class Customer {
    // let's use constructor 
    constructor(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
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
let myCustomer = new Customer("Vishal", "Jagadale");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
