const fs = require("fs");
const bioData = {
    id: 1,
    name: "Nadeem"

}
//console.log(bioData.name);

//const jsonData = JSON.stringify(bioData);
//console.log(jsonData);

//const objData = JSON.parse(jsonData);
//console.log(objData); 
// Task
// 1.Conver to JSON
// 2.Add it to another file
// 3.read file
// 4.Again convert back to js obj 
// 5.console log converted obj

// 1
const jsonData = JSON.stringify(bioData);

// 2
/* fs.writeFile("jsonData.json", jsonData, (err) => {
    console.log("Data added successfully!");
}); */

// 3
fs.readFile("jsonData.json","utf-8",(err,data)=>{
   // console.log(data);
   
   // 4
   const orgData = JSON.parse(data);

   // 5
   console.log(orgData);
})