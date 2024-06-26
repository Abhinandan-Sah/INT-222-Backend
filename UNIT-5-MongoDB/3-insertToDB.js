const { MongoClient}=require('mongodb');
const uri='mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function listDatabases(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');    // Connected to MongoDB
        const db=client.db('grvDB');
        const collection=db.collection('Students_Details');
        await collection.insertOne({name: "AVI", age: 21});
        await collection.insertOne({name: "Abhinandan", age: 21});
        console.log("document inserted successfully");
    }catch(error){
        console.error("error connecting to MongoDB", error);
    }finally{
        await client.close();
    }
}
listDatabases();