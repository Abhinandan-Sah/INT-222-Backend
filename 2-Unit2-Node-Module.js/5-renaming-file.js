var fs = require('fs')

fs.rename("fil.txt", "renamingFile.txt", (err)=>{
    if(err){
        console.error("error to create file");
    }
    else{
        console.log("File is successfully unlink");
    }

});