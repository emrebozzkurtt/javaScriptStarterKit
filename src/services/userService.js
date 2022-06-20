
//export dışarıdan import edilebilir hale getirir
//default import ederken UserService'ı direkt olarak getir demek
export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    add(user){
        console.warn("UserService.add()")
        this.users.push(user)
        this.loggerService.log("User Added : " + user.id)
    }

    list(){
        console.warn("UserService.list()")
        console.log(...this.users)
    }

    getById(id){
        console.warn("UserService.getById(" + id + ")")
        console.log(this.users.find(user => user.id == id))
    }
    
}