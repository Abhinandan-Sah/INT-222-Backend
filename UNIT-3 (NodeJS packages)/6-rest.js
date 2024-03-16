const express = require("express");
const app = express();
app.use(express.json());

const course=[
    {id:1, title: 'Node js'},
    {id: 2, title: 'HTML'},
    {id: 3, title: 'CSS'},
    {id: 2, title: 'JS'},
]

//Read request Handlers
app.get("/api/courses", (req, res) =>{
    res.send(course);
})

app.get("/api/courses/:id", (req, res)=>{
    const courses = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('Not Found');
        
    }
    res.send(course);
});

//CREATE Request Handler
app.post('/api/courses', (req, res)=>{
    const course ={
        id: courses.length+1,
        title: req.body.title
    };
    courses.push(course);
    res.send(course);
});

//UPDATE Request Handler
app.put('/api/courses/:id', (req, res)=>{
    const courses = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('Not Found');
        
    }
    course.title = req.body.title;
    res.send(course);
});

//DELETE Request Handler
app.delete('/api/courses/:id', (req, res)=>{
    const courses = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('Not Found');
        
    }
    const index = courses.indexOF(course);
    courses.splice(index,1);
    res.send(course);
});

app.listen(8080);