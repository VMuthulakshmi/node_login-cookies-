let http=require('http');
let express=require('express');
let app=express();//creates new express application
let route=require('./auth.js')//for route to auth.js is included

app.use((req,res,next)=>{
    console.log("first  response")
    res.json(message="this is the msg")
    next();
});
app.use(route)//ithukapramdefalut vea next irukum...
app.set("port",3033);  
let server=http.createServer(app);
server.listen(3033);