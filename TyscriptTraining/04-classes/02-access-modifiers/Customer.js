var Customer = /** @class */ (function () {
    // let's use constructor 
    function Customer(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
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
