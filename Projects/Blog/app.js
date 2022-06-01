const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to the mongodb database...
mongoose.connect("mongodb://localhost:27017/blogDb",{
    useNewUrlParser : true,
   // userUnifiedTopology : true
}, () =>{
    console.log("Database connected successfully...")
})

//  MiddleWares
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));
app.use(require("./routes/blog"));

// Server configuration.....
app.listen(3333, () =>{
    console.log("Server is started at port no : 3333...");
})