const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res)=>{
    //console.log(req.url);
    if(req.url == "/"){

        res.end('Hello from Home page');
    }else if(req.url == "/about"){
        res.end('Hello from About page');
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userApi/userApi.json`,"utf-8",(err,data)=>{
          console.log(data);
          res.end(data);
        })
        //res.end('Hello from userApi page');
       // res.end(data);
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>404 Page not found</h1>');
    }

});

server.listen(4242,"127.0.0.1",()=>{
    console.log("Listening to the port number 4242");
});