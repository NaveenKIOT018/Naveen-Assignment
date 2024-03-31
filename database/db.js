import { MongoClient } from "mongodb"

const url = "mongodb+srv://Nav:NavShiv123@cluster0.a8uoi1j.mongodb.net/"

export const client = new MongoClient(url)

export const connectToDatabase = async() => {
   try{
    await client.connect()
    console.log("DB IS CONNECTED")
   }catch(error){
    console.log(error)
   }
  }

  

