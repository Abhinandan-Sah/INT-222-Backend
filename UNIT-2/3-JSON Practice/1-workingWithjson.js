const fs= require('fs');
//read a json file
// fs.readFile('file.json',"utf8", (err, data) =>{
//     if(err){
//         console.log("file doesnot exit");
//     }
//     else{
//         console.log(JSON.parse(data)); // parse => it is used to make file data more 
//                                                 // readable and convert string type data to object type data
//     }
// })

//writing in the json file
const content = 
{"result":true, "count":100}

const convert = JSON.stringify(content, null, 2);
fs.appendFile("file.json", convert, (err)=>{
    if(err){
        console.error("error is there");
    }
    else{
        console.log("file is updated");
    }
});