const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/compose", (req, res) => {
  
    res.render("composeBlog");
})
    .post("/compose", (req, res) => {
        const { title, content } = req.body;

        // Checking for missing fields
       if (!title || !content) return res.send("Please enter all the fileds...");

        const newBlog = new Blog({ title, content });
        
        // Save the blog the DataBase
        newBlog.save()
            .then(() => {
                console.log("Blog saved successfully...");
                res.redirect("/");
            })
            .catch(err => {
                console.log(`Reason- ${err}`);
            })
    });

module.exports = router;
