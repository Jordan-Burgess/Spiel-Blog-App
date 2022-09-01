// const express = require('express');;
// const router = express.Router();

// router.use(express.json());

// router.use(express.urlencoded({ extended: false }));


// //Make sure that this is the right file path for models 
// const db = require("../models")

// //Show Route
// router.get('/:genreIndex', async (req,res) => {
//     try {
//         const foundGenre = await db.Genre.findById(req.params.genreIndex)
//         console.log(foundGenre)
//         res.render("genre_show.ejs", {genre:foundGenre, id: foundGenre._id})
//     } catch(err) {
//         console.log(err)
//         res.redirect('/404')
//     }
// });

// //Index Route
// router.get("/", async (req,res) => {
//     try{
//         const allGenres = await db.Genre.find()
//         const context =  { genre: allGenres };
//         res.render("genre_index.ejs", context);
//     } catch(err) {
//         console.log(err)
//         res.redirect('/404')
//     }
// })

// module.exports = router;