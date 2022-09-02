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
        const allGenres = await db.Genres.find()
        const context =  { genres: allGenres };
        res.render("genre_index.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Show Route
router.get('/:genreIndex', async (req,res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.genreIndex)
        const allGenres = await db.Genres.find()
        const allComments = await db.Comments.find()
        res.render("show.ejs", {blogs:foundBlog, id: allGenres._id, blog: allGenres, comments: allComments,})
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

module.exports = router;