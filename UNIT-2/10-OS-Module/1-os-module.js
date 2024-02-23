const o= require('os');
// const architecture = o.version();
const architecture = o.availableParallelism();
console.log(architecture);