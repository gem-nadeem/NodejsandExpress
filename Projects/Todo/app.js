const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//var i1 = [];
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true,useUnifiedTopology:true});
const itemSchema = {
    name: String
}
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({
    name: "Welcome to my page...",
});

const item2 = new Item({
    name: "Feel free to give feedbacks...",
});


const d = [item1, item2];
/* Item.insertMany(d,(err) =>{
    if(err){
        console.log("You need to fix this "+err);
    }
    else{
        console.log("Successfully task added... ");
    }
}); */


app.get("/", (req, res) => {
    //res.send("Welcome to Home Page...");
    Item.find({}, (err, fun) => {
        // console.log(fun);
        if (fun.length == 0) {
            Item.insertMany(d, (err) => {
                if (err) {
                    console.log("You need to fix this " + err);
                }
                else {
                    console.log("Successfully task added... ");
                }
            });

            res.redirect("/");

        }
        else {

            res.render("list", { newListItems: fun });
        }
    })
    // res.render("list", { newListItems: i1 });
});

app.post("/", (req, res) => {
    var itemName = req.body.task;
    // console.log(i);
    //i1.push(i);
    //res.render("list", {newListItem : i})
   // res.redirect("/");
   const item = new Item({
       name : itemName,
   });
   item.save();
   res.redirect("/");

});

app.post("/delete", (req, res)=>{
    // console.log(req.body.todo);
    const deleteItem = req.body.todo;
    Item.findByIdAndRemove(deleteItem , (err)=>{
       if(!err){
           console.log("Task deleted Successfully...");
           res.redirect("/");
       }
       else{
           console.log("You need to fix this error "+err);
       }
    });
    
});

app.listen(3131, function () {
    console.log("Listening to port no 3131...");
})