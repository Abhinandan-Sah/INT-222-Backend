const connect = require('connect');
const app = connect();
function logger(req, res, next){
    console.log(`${req.method}${req.url}`);
    next();
}

app.use(logger);
app.use((req, res)=>{
    res.end("Hello World");
});
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})