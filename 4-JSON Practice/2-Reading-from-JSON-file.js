const fs= require('fs');
//read a json file
fs.readFile('file.json',"utf8", (err, data) =>{
    if(err){
        console.log("file doesnot exit");
    }
    else{
        console.log(JSON.parse(data)); // parse => it is used to make file data more 
                                                // readable and convert string type data to object type data
    }
})