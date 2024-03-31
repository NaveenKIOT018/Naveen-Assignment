import data from '../data.json' assert { type: "json" };

import { client, connectToDatabase } from "../database/db.js";
// import exp from "constants";
const products = Object.entries(data)[0][1]


const database = client.db('product');
const col = database.collection('product_data');

// inserting the products

export const createProducts = async (req, res) => {
    try {
        await connectToDatabase()   
        const result = await col.insertMany(products);
        res.send(result)

    } catch (error) {
        console.log(error);
        res.status(500).send("Error inserting data into database");
    } 
};

// getting the specific product

export const getAllProduct = async(req,res)=>{
try{

    await connectToDatabase() 
    const cursor  = col.find({ category:"smartphones" });

    let resu = []
    for await (const doc of cursor){
        resu.push(doc)
    }
    res.send(resu); 
    
}  catch (error) {
    console.log(error);
    res.status(500).send("Error inserting data into database");
}
}


// updating the products

export const updateProducts = async(req,res)=>{
      try {

        await connectToDatabase()   
        const result = await col.updateOne(
            { title :  "iPhone X"},
            {
                $set: {
                    description: "Hello"
                }
            }
         )

        res.send(result)
        
      } catch (error) {
         console.log(error)
         res.status(500).send("Error in Updating the Data")
      }
}

export const deleteProduct = async(req,res)=>{
    try {

        await connectToDatabase()   

        const result = await col.deleteOne(
            { title :  "iPhone X"},

        )

        res.send(result)
        
      } catch (error) {
         console.log(error)
         res.status(500).send("Error in Deleting the Data")
      }
}