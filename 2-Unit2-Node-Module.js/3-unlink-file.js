var fs = require('fs')

// fs.unlink("file.txt", (err) =>{
//     if(err){
//         console.err('File cannot be unlink(deleted)');
//     }
//     else{
//         console.log("File is successfully unlink");
//     }
// })
fs.writeFile('fil.txt', "file is created", (err)=>{
    if(err){
        console.error("error to create file");
    }
    else{
        console.log("File is successfully unlink");
    }

});