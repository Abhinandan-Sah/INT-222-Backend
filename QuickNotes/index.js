console.log(__dirname+'/public')
const express= require("express");
const app = express();
const path = require("path")


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.listen(3000, (req, res)=>{
    console.log(`Server is working at port ${3000}`);
}) 