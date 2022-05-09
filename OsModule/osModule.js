const os = require("os");

// Os Module Methods
//console.log(os.arch());


// Free Memory
const freeMemory = os.freemem();
//console.log(freeMemory);
console.log(`${freeMemory/1024/1024/1024}`);

// Total Memory
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);


// Other Method 
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

