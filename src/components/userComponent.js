import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/User.js";
import UserService from "../services/userService.js";

console.log("User Component Loaded")

let logger1 = new BaseLogger
let userService = new UserService(logger1)

let user = new User(1, "Mustafa", "Kaya")
let user1 = new User(2, "Ali", "Kaya")
let user2 = new User(3, "Veli", "Kaya")

userService.add(user)
userService.add(user1)
userService.add(user2)

userService.list()
userService.getById(2)
