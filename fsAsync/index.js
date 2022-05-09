const fs = require('fs');

/* fs.writeFile('read.txt',"Today is awesome day :)",
(err) =>{
    console.log("File is created!!!");
     
}); */

// Append data
/* fs.appendFile('read.txt'," and it's also very hot day  :(",(err)=>{
    console.log("Appended Successfully :)");
}); */




// Read file
fs.readFile('read.txt', 'UTF-8',(err,data)=>{

    console.log(data);
});