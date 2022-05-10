const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8080;

//Path
 console.log(path.join(__dirname,'../public'));
const absPath = path.join(__dirname,'../public'); 
const templatePath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');  


// to set the view engine
app.set("view engine",'hbs');

//to rename views directory
app.set("views",templatePath);

// Partials
hbs.registerPartials(partialsPath);

// Built-in middleware
//app.use(express.static(absPath));

// template engine route
app.get("",(req,res) =>{
   res.render('index');
});

app.get("/about",(req,res) =>{
    res.render('aboutus');
 });

/* app.get("/", (req, res) => {
    res.send("Hello from express server");

}) */
app.get("/about/*",(req, res) =>{
    res.render("404",{
        errorcomment : "Opps this about us page couldn't found"
    });
})
app.get('*',(req, res) =>{
    res.render("404",{
        errorcomment : "Opps page couldn't found"
    });
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})