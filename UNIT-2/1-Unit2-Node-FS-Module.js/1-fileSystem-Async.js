var a= require('fs');
a.readFile('file.txt', 'utf8', function(data, err){
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log(data);
    }
});