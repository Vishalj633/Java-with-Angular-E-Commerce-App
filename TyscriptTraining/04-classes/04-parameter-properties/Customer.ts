class Customer {

    // let's use constructor 
    constructor(private _firstName : string, private _lastName : string){
    }

    public get firstName():string{
        return this._firstName;
    }

    public get lastName() : string {
        return this._lastName;
    }

    public set firstName(value : string){
        this._firstName=value;
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

// tsc build clean