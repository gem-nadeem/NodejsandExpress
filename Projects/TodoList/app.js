const express = require("express");
const mongoose = require("mongoose");


const app = express()

// connection to mongodb
mongoose.connect("mongodb://localhost/todo_express",{
   /*  userNewUrlParser : true,
    userUnifiedTopology : true, */
});



// middlewares
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.set("view engine","ejs");


// routes
app.use(require("./routes/index"))
app.use(require("./routes/todos"))



// server configuration...
app.listen(3232, () =>{
    console.log("Server is running...");
});
