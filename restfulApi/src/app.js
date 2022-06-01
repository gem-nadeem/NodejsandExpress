const express = require("express");
require("./db/connections");
const Student = require("./models/students");
const aboutRouter = require("./routers/about");


const app = express();
const port = process.env.PORT || 5454;

app.use(express.json());
app.use(aboutRouter);
 

// 1. Create new Router
//const router = new express.Router();




// 2. we need to define the router
//router.get("/about", (req,res) =>{
  //  res.send("Welcome to About Page");
//});


// 3. we need to register out router
//app.use(router);

// Create a new students

// Using CallBack Function
//app.post("/students", (req, res)=>{

// console.log(req.body);
// const user = new Student(req.body);

// Using Promise
//user.save().then( () => {
// res.status(201).send(user);
// }).catch( (e) => {
//   res.status(400).send(e);
//})

//})




// Using Async-Await
app.post("/students", async (req, res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        console.log(`Reason - ${e}`);
        res.status(400).send(e);

    }
})


// read the data of registered Students
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send();
    }
})



// get the indivisual student data using id
//app.get("/students/:name", async (req, res) => {

 //   try {
//        const name = req.params.name;
        // console.log(req.params);
//        const studentData = await Student.findByName(name)
//        if (!studentData) {
//            return res.status(404).send();
 //       } else {
//            res.send(studentData);
//        }
//    } catch (e) {
//        console.log(`Reason - ${e}`);
//        res.status(500).send(e);

 //   }
//});


// update students by its id
app.patch("/students/:id", async(res,req) =>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body, {
            new : true
        });
        res.status(200).send(updateStudent);
    }catch(e){
        console.log(`Reason - ${e}`);
        res.status(404).send(e);
    }
})

// delete the students by it's id
app.delete("/students/:id", async(req, res) =>{
    try{
         const _id = req.params.id;
         const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
             return res.status(400).send(_id);
        }
        res.send(deleteStudent);
    }catch(e){
        console.log(`Reason - ${e}`);
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`Connection is setup at ${port} ...`);
})