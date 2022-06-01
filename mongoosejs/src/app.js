const mongoose = require("mongoose");


// DataBase creation
mongoose.connect("mongodb://localhost:27017/employeeList",{useNewUrlParser : true, useUnifiedTopology : true})
.then(() =>{
    console.log("Connection Successfull...");
})
.catch((err) =>{
    console.log("You need to fix it "+err);
});


// Schema
// A mongoose schema defines the structure of the document,
// default values, validators , etc...

//  Documents structure
const employeeListSchema = new mongoose.Schema({
     Name   :  { 
                type : String,
                required: true // validator
               },
     Age    : Number,
     Role   : String,
     active : Boolean,
     date   :{
              type    : Date,
              default : Date.now 
     }
     
})

// A Mongoose model is a wrapper on the Mongoose Schema.
// A Mongoose schema defines the structure of the document,
// default values , validators, etc., whereas a Mongoose model
// provides an interface to the database for creating,
// querying , updating , deleting records, etc.


// Creation of collections
const EmployeeList = new mongoose.model("EmployeeList",employeeListSchema)
