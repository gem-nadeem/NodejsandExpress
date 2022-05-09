//Nodejs

const http = require('http');
const fs = require('fs');

var requests = require('requests');

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal,orgVal) =>{
    let temperature = tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}",orgVal.main.temp_min)
    temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max)
    temperature = temperature.replace("{%location%}",orgVal.name)
    temperature = temperature.replace("{%country%}",orgVal.sys.country)
    //temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main)
    
    return temperature;
};
const server = http.createServer((req , res) =>{
    //console.log(res);
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=6a40ca6a9141db06185fe25dd589e122&units=metric")

        .on('data',  (chunk) => {
        const ObjData = JSON.parse(chunk);
        const  arrData = [ObjData];
        //  console.log(arrData);
        
        
           const realTimeData = arrData.map(function(val)  {
            // console.log(val.main);
             replaceVal(homeFile,val);
           
         }); 
        res.write(realTimeData);
           console.log(realTimeData); 
        })
        .on('end',  (err) => {
          if (err) return console.log('connection closed due to errors', err);
         
         // console.log('end');
          res.end(); 
        });
    }

}); 

server.listen(3535 , "127.0.0.1");