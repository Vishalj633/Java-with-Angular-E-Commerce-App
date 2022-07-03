export class Customer { // export -> so it could be imported 

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
