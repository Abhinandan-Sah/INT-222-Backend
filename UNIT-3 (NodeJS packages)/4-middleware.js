const express = require("express"); const app = express();
const PORT = 3000;
app.use(function(req, res, next){
    console.log("Middleware called");
    next();
});

app.get("/", function(req, res){
    console.log("/user request called");
    res.send("Welcome to NodeJS");
});
app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    console.log(`Server listening on PORT ${PORT}`);
});