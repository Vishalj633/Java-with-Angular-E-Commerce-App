var Customer = /** @class */ (function () {
    // let's use constructor 
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
// let's create an instance
/*
let myCustomer = new Customer();
 
myCustomer.firstName="Vishal";
myCustomer.lastName="Jagadale";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/
var myCustomer = new Customer("Vishal", "Jagadale");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
