const {mongoClient, MongoClient, CommandStartedEvent}=require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const dbname='myproject';
async function main(){
    const client =new MongoClient(uri);
    try{
        await client.connect();
        console.log('Connect to the database');
        const db=client.db('grvDB');
        const collection=db.collection('Students_Details');
        const result=await collection.insertMany([
            {name:'Abhinandan',age:24},
            {name:'Avinash',age:25}
        ]);
        console.log(`${result.insertedCount} documents inserted`);
        const documents=await collection.find({}).toArray();
        console.log('Found thr following documents');
        console.dir(documents);
        const updateResult=await collection.updateOne({name:'satya_kumar'},{$set:{age:24}})
        console.log(`${updateResult.modifiedCount}documents uploaded`);
        const updatedDocument=await collection.findOne({name:'satya_kumar'});
        console.log('updated document');
        console.dir(updatedDocument);
        const deleteResult =await collection.deleteOne({name:'satya_kumar'});
        console.log(`${deleteResult.deletedCount} documentd deleted`);

    }catch(err){
        console.log(err.stack);
    }finally{
        await client.close();
    }
}
main().catch(console.log)