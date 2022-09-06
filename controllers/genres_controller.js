const express = require('express');const { Blog } = require('../models');
;
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));


//Make sure that this is the right file path for models 
const db = require("../models")

//Index Route
router.get("/", async (req,res) => {
    try{
        const allGenres = await db.Genre.find()
        const context =  { genres: allGenres };
        res.render("genre_index.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Show Route
router.get("/:genre", async (req,res) => {
    try{
        const chosenGenre = await db.Blog.find({genre: `${req.params.genre.toLowerCase()}`})
        const genre = req.params.genre
        const context =  { genres: chosenGenre, genre: genre };
        res.render("genre_show.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

module.exports = router;