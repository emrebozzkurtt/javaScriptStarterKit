export class BaseLogger{

    log(data){
        console.log("Default Logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Elastic Logger" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Mongo Logger" + data)
    }
}