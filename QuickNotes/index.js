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

app.get('/file/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, fileData){
        res.render('show.ejs', {fileData});
    })
})

app.post("/create", (req, res) => {
    // console.log(req.body); 
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        try{
            res.redirect("/");
        }
        catch(err){
            console.log(err.getMessage);
        }
        
    });
});


app.listen(3000, (req, res)=>{
    console.log(`Server is working at port ${3000}`);
}) 