 const { parse } = require("path");
const path = require("path");

 /* console.log(path.dirname('D:\LearnNodejs\PathModule\index.js'));
 console.log(path.extname('D:\LearnNodejs\PathModule\index.js'));
 console.log(path.basename('D:\LearnNodejs\PathModule\index.js')); */

 //console.log(path.parse('D:\LearnNodejs\PathModule\index.js'));

 const data = path.parse('D:\LearnNodejs\PathModule\index.js');

 console.log(data.name);