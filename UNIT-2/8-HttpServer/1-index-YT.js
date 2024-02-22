const http = require("http");

const server = http.createServer((req, res) =>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the others sides");
    }
    else if(req.url == "/about"){
        res.end("Hello from the About" );
    }
    else if(req.url == "/contact"){
        res.end("Hello from the contact sides");
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1> 404 error page. Page doesn't exit </h1>");
    }
   
    
});

server.listen(8080, "127.0.0.1", () => {
    console.log("Listening to the port no. 8080");
})