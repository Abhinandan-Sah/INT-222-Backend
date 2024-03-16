const express = require('express')
const app = express()


const PORT = 3000;


app.get("/user", function(req,res){
    res.send("Handled GET request")
})
app.post("/user", function(req,res){
    res.send("Handled POST request")
})
app.delete("/remove", function(req,res){
    res.send("Handled DELETE request")
})


app.listen(PORT, function(err){
    if(err) console.log("Error in server setup");
    console.log(`Server listening on port ${PORT}`);
})