const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

//Path
 console.log(path.join(__dirname,'../public'));
const absPath = path.join(__dirname,'../public');  


// to set the view engine
app.set("view engine",'hbs');

// Built-in middleware
//app.use(express.static(absPath));

// template engine route
app.get("",(req,res) =>{
   res.render('index');
});

app.get("/", (req, res) => {
    res.send("Hello from express server");

})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})