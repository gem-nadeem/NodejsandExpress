// CURD Operation

const fs = require('fs');

// Making folder
/* fs.mkdirSync("Nadeem"); */

/* fs.writeFileSync('Nadeem/bio.txt',"Name : Sam"); */


//Appending data to existing data
/* fs.appendFileSync('Nadeem/bio.txt', "\nDesignation : SDE");
 */

// Readingfile
/* data = fs.readFileSync('Nadeem/bio.txt',"utf8");

console.log(data); */

// Rename the file
//fs.renameSync('Nadeem/bio.txt', 'Nadeem/myBio.txt');

// Delte files and folder

//fs.unlinkSync('Nadeem/myBio.txt');

fs.rmdirSync("Nadeem");