const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    //console.log(todo);
    const newTodo = new Todo({todo})

    // save the todo
    newTodo
    .save()
    .then(() => {
        console.log("Successfully added todos...");
        res.redirect("/")
    })
    .catch(err => console.log("You need to fix this error : "+ err));
})

.get("/delte/todo/:_id", (req, res) =>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Tode deleted successfully...");
        res.redirect("/");
    })
    .catch( err => console.log("You need to fix this error : "+ err))
});


module.exports = router;