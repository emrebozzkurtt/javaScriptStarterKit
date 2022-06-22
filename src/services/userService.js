
//export dışarıdan import edilebilir hale getirir

import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import DataError from "../models/DataError.js"

//default import ederken UserService'ı direkt olarak getir demek
export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    //let loggerService = new BaseLogger()

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidation(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidation(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }
    }

    checkCustomerValidation(user) {
        let requiredFields = "id name surname age".split(" ")
        let hasErrors = false
        for (const propteries of requiredFields) {
            if (!user[propteries]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${propteries} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }

    checkEmployeeValidation(user) {
        let requiredFields = "id name surname age salary".split(" ")
        let hasErrors = false
        for (const propteries of requiredFields) {
            if (!user[propteries]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${propteries} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }

    add(user) {
        console.warn("UserService.add()")
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidation(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidation(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This User Type Wrong Can't Added", user))
                break;
        }
    }

    listCustomers() {
        console.warn("UserService.listCustomers()")
        console.log(...this.customers)
    }

    getByCustomerId(id) {
        console.warn("UserService.getById(" + id + ")")
        console.log(this.customers.find(customer => customer.id == id))
    }

    getCustomersSortedByAge() {
        console.warn("UserService.getCustomersSortedByAge()")
        console.log(...this.customers.sort((customerA, customerB) => {
            if (customerA.age > customerB.age) {
                return 1;
            }
            else if (customerA.age === customerB.age) {
                return 0;
            }
            else{
                return -1;
            }
        }))
    }
}