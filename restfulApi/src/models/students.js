const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    slNo :{
        type : Number,
        required : true
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        //unique: [true, "Email is already exsits!!!"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email!");
            }
        }
    },
    phone : {
        type : Number,
        min :10,
       // unique : true
    },
    address : {
        type : String,
        required : true
    }
})

// Create a new collection
const Student = new mongoose.model('Student', studentSchema );
 module.exports = Student;