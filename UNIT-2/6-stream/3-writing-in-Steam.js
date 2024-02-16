//Writing to a stream
var fs = require('fs');
var data = 'Simply Easy Learning';
var writerStream = fs.createWritStream('output.txt');
writerStream.write(data, 'utf8');
writerStream.end();
writerStream.on('finish', function(){
    console.log("Write completed using writerStream");
});

writerStream.on('err', function(err){
    console.log(err.stack);
})
console.log("Program Ended");

