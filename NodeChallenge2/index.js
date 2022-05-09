// CURD Operation

const fs = require('fs');

// Making folder
/* fs.mkdir("Nadeem", (err)=>{
    console.log("Folder created!")
}); */


// Create a file
/* fs.writeFile('Nadeem/bio.txt',"Name : Sam",(err)=>{
    console.log("File created!")
}); */


// Append data 
/* fs.appendFile("Nadeem/bio.txt", "\nDesignation : SDE-2",(err)=>{
    console.log("Append Successfully!!");
}); */

 // Read File
 /* fs.readFile("Nadeem/bio.txt","UTF-8",(err,data)=>{
     console.log(data);
 }) */

 
 //Rename file
 /* fs.rename("Nadeem/bio.txt","Nadeem/myBio.txt",(err)=>{
     console.log("Rename done!!");
 }) */

 
 // Delete file
/* fs.unlink("Nadeem/myBio.txt",(err)=>{
    console.log("File deleted Successfully!!");
}) */

// Delete folder
fs.rmdir("Nadeem",(err)=>{
  console.log("Folder deleted Successfully!!!");
});