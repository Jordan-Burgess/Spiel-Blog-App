const express = require('express');;
const router = express.Router();

router.use(express.json());


//Make sure that this is the right file path for models 
const db = require('../models')

//New Route
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Create route
router.post('/', async (req,res) => {
    const createdBlog = req.body;

    try {
        const newBlog = await.db.Blogs.create(createdBlog);

        console.log(newBlog);

        res.redirect('/blogs');
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
});

