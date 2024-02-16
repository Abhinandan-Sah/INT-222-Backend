//Transforming data(compress) using streams ->

//compressing data using Gzip:
var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.Gzip();
var r= fs.createReadStream('news.txt');
var w= fs. createWriteStream('output.txt.zip')
r.pipe(gzip).pipe(w);

//compressing data using Deflet:
var zlib = require('zlib');
var fs = require('fs');
var defl = zlib.createDeflate();
var r= fs.createReadStream('news.txt');
var w= fs. createWriteStream('news.txt.zip')
r.pipe(defl).pipe(w);
