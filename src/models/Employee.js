import User from "./User.js";

export default class Customer extends User{
    constructor(id, name, surname, age, salary){
        super(id, name, surname, age)
        this.salary = salary
    }
}
