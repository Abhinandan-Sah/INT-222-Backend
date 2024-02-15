var fs = require('fs');

// try {
//     var data = fs.readFileSync('file.txt', 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.error(error);
// }
// fs.writeFile("file.txt", "i am not understanding the solution of problem you start talking with each other");

// fs.writeFile('file.txt', 'content Written!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// fs.appendFile('file.txt', 'content hai!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


/*
// This checks file either it is present or not
fs.access("file2.txt", fs.constants.F_OK, (err)=> //it will say file is not present because file2 isn't present
{
    if(err){
        console.error('sorry file is not present')
    }
    else{
        console.log("file is there");
    }
} );
*/

