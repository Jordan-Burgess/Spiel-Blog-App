const express = require('express');;
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
router.get('/:genresIndex', (req, res) => {
    const genre = genres[req.params.genresIndex]
    const genreIndex = req.params.genresIndex;
    res.render('genre_show.ejs',{genre:genre, genreIndex: genreIndex})
})

module.exports = router;