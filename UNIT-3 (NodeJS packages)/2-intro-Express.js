const express = require("express");
const app = express();

// app.get('/', function(req, res){
//     res.send("hello world");
// })
const myLogger = function(req, res, next){
    // res.send("hello world");
    console.log('LOGGED');
    next();
}
app.use(myLogger);
app.get('/', function(req, res){
    res.send("hello world");
})
app.listen(8080);