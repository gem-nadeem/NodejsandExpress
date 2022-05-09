const path = require("path");
const express = require("express");
const app = express();
const port = 3000;


//console.log(__dirname);

//console.log(path.join(__dirname,"../staticWebsite"))

const staticPath = path.join(__dirname,"../staticWebsite");

// Built-in Middleware
app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.send("Welcome to my home page");
});

app.get("/about",(req,res) =>{
    res.send("Welcome to about page");
});

app.get("/contact",(req,res) =>{
    res.send("Welcome to contact page");
});

app.get("/temp",(req,res) =>{
   // res.send("Welcome to temp page");

   //Sending Json data as a response 
    res.send([
        {
            id : 1,
            name : "Nadeem"
        },
        {
            id : 2,
            name : "Sarwar"
        }
    ]);
});

app.listen(port,() => {
   console.log(`listening to the port no ${port}`);
})