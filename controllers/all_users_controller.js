const express = require('express');;
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));


//Make sure that this is the right file path for models 
const db = require("../models/users_models")

//Index Route
router.get("/", async (req,res) => {
    try{
        const allUsers = await db.User.find()
        const context =  { users: alUsers };
        res.render("user_index.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});


//Show Route
router.get("/:userIndex", async (req,res) => {
    try{
        const chosenUser = await db.Blog.find({user: 'person1'})
        const context =  { users: chosenUser };
        res.render("user_show.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

module.exports = router;