/* const name ="Nadeem";

console.log(name); */

const fs = require("fs");


// Creating new file (write)
/* fs.writeFileSync("read.txt","Welcome to Nodejs Notes"); */

// This will override your file with existing file's data
fs.writeFileSync("read.txt","Hello ,Welcome to Nodejs Notes.");

//console.log(fs);

// This command is used to append data instead od overrideing
fs.appendFileSync('read.txt', "\nNotes will be available soon Thank you!");

// Read File
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
// Node.js includes an additional data type called Buffer
// (not available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packates over the newtwork.

// Original string

org_data = buf_data.toString();

console.log(org_data);

// Rename the file

fs.renameSync('read.txt','readWrite.txt');
