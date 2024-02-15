var fs = require('fs');
fs.writeFile('fil.txt', "file is created", (err)=>{
    if(err){
        console.error("error to create file");
    }
    else{
        console.log("File is successfully unlink");
    }

});