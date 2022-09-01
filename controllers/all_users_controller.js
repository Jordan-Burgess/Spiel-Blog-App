const express = require('express');;
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));


//Make sure that this is the right file path for models 
const db = require("../models/User")

//Index Route
router.get("/users", async (req,res) => {
    try{
        const allUsers = await db.User.find()
        console.log(allUsers)
        const context =  { users: allUsers };
        res.render("user_show.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Show Route
router.get('/users/:usersIndex', async (req,res) => {
    try {
        const foundUser = await db.User.findById(req.params.usersIndex)
        console.log(foundUser)
        res.render("user_show.ejs", {user:foundUser, id: foundUser._id})
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

module.exports = router;