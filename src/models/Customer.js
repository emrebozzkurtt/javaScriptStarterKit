import User from "./User.js";

export default class Customer extends User{
    constructor(id, name, surname, age, creditCardNumber){
        super(id, name, surname, age)
        this.creditCardNumber = creditCardNumber
    }
}
