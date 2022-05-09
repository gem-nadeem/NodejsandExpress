const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on('request',(req,res)=>{
   // var fs = require('fs');
    /* fs.readFile('input.txt',(err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    }); */


    // Another way to streaming data
    // Reading a readable stream
    // Create a readable stream
    // Handle stream events -> data, end, error

   // const rstream = fs.createReadStream("input.txt");

   // rstream.on('data', (chunckData) =>{

       // res.write(chunckData);
   // });
  //  rstream.on('end', ()=>{
  //      res.end();
    //});

   // rstream.on('error', (err)=>{
    // console.log(err);
     //res.end("File not fond!!!")
   // })

   // 3rd Method

   const rstream = fs.createReadStream("input.txt");
   rstream.pipe(res);
});

server.listen(3434, "127.0.0.1");