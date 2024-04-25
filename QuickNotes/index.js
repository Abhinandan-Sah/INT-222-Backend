const express= require("express");
const app = express();
const path = require("path")
const fs= require("fs")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    fs.readdir(`./files`, function(err, files){
        res.render("index.ejs", {files: files});
    });
    
});

app.post("/create", (req, res) => {
    
})

// app.get("/profile/:username", function(req, res){
//     res.send(req.params.username);
// })
// app.get("/profile/:username/:age", function(req, res){
//     res.send(`Welcome ${req.params.username}, ${req.params.age}`);
// })

app.listen(3000, (req, res)=>{
    console.log(`Server is working at port ${3000}`);
}) 