// var fs = require('fs')

// fs.rename("renamingFile.txt", "formFile.txt", (err)=>{
//     if(err){
//         console.error("error to rename file");
//     }
//     else{
//         console.log("File is successfully rename");
//     }
// });

var fs = require('fs');

fs.rename("renamingFile.txt", "formFile.txt", (err) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("File is successfully renamed");
    }
});
