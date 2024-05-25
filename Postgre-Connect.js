const {Client} = require('pg')

const client= new Client({
    host: "localhost",
    user: "postgres",
    post: 5432,
    password: "12345678", //or rootuser if it not run
    database: "postgres"
})

client.connect();

client.query(`Select * from task`, (err,res) =>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})