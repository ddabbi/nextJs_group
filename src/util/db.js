import { MongoClient } from "mongodb";

// npm install mongodb
const url = 'mongodb+srv://admin:admin@cluster0.ggeylyc.mongodb.net/';
const options = {};
let connectDB;

if(process.env.NODE_ENV === 'development'){
    if(!global._mongo){
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
}else{
    connectDB = new MongoClient(url, options).connect()
}

export { connectDB };