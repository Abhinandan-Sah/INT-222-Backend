// const mybuffer = Buffer.alloc(17);
// mybuffer.write("node welcome");
// const a = (mybuffer.toString);
// console.log(a);
// const bufferfs= new Buffer('dafe');

//method 1
var buff = Buffer.alloc(10);
// console.log(buff);
// buff.write('write');
// console.log(buff);
// var a = buff.toString();
// console.log(a);

//method 2
// var buff2 = new Buffer('node');
// console.log(buff2);
//method 3
// var buff3 = Buffer.from([1, 2, 3, 4])

// length calculator
// var length = buff.length;
// console.log(length);

//concatination
// console.log(Buffer.concat([buff, buff2]));
// console.log()

//Copy buffer
/*const bufferSrc = ('ABC');
console.log(bufferSrc);
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest); 

const Data = bufferDest.toString('uft-8');
console.log(Data);
*/

// Slicing Data
/*const bufferOld = Buffer.from('nodejsisthere tointroduceyou toindustry');
const bufferNew = bufferOld.slice(16, 25);
console.log(bufferNew.toString());
*/

// Compare two buffers
const buffero = Buffer.from('m');
const bufferT = Buffer.from('n');
var result = buffero.compare(bufferT);
console.log(result);

