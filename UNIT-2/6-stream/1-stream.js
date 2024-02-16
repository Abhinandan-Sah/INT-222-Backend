//Sample JavaScript code for creating
// a Readable Stream
// Accessing Streams
const { umask } = require('process');
const {Readable} = require('stream');
const inStream = new Readable({
    read(){}
})
inStream.push("here to sturdy int222");
inStream.push(" an industry oriented course"); 
inStream.push(null);
inStream.pipe(process.stdout);


//witeable stream
