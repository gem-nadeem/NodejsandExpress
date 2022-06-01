const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsDb", {
   // useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify : false
  

}).then(() => {
    console.log("Connected Successfully... ");
}).catch((e) => {
    console.log("No Connection extablished...");
    console.log(`Reason - ${e}`);
});