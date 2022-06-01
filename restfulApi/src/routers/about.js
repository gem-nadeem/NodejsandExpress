const express = require("express");
const router = new express.Router();

router.get("/about", (req,res) =>{
    res.send("Welcome to About Page");
});

module.exports = router;