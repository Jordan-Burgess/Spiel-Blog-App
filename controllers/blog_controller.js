const express = require('express');;
const router = express.Router();

const methodOverride = require('method-override')
router.use(methodOverride('_method'));

router.use(express.json());

router.use(express.urlencoded({ extended: false }));


//Make sure that this is the right file path for models 
const db = require("../models")

//New Route
router.get('/new', async (req, res) => {
    const allGenres = await db.Genre.find()
    res.render('new.ejs', {genre: allGenres});
});

//Create route
router.post('/', async (req,res) => {
    const createdBlog = req.body;

    try {
        const newBlog = await db.Blog.create(createdBlog);

        console.log(newBlog);

        res.redirect('/blogs');
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Show Route
router.get('/:blogsIndex', async (req,res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.blogsIndex)
        const allComments = await db.Comment.find()
        res.render("show.ejs", {blog:foundBlog, id: foundBlog._id, comments: allComments})
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Index Route
router.get("/", async (req,res) => {
    try{
        const allBlogs = await db.Blog.find()
        const context =  { blogs: allBlogs };
        res.render("index.ejs", context);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Destroy/Delete
router.delete('/:blogId', async (req,res) => {
    try {
        const foundBlog = await db.Blog.findByIdAndDelete(req.params.blogId)
        return res.redirect('/blogs');
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Edit Route
router.get('/:blogId/edit', async (req,res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.blogId)
        const allGenres = await db.Genre.find()
        res.render('edit.ejs', { blog: foundBlog, id: foundBlog._id, genre: allGenres})
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Update Route 
router.put('/:blogId', async (req,res) => {
    try{
        const updatedBlog = req.body;
        await db.Blog.findByIdAndUpdate(req.params.blogId, updatedBlog, {new:true})
        res.redirect(`/blogs/${req.params.blogId}`);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

router.put('/:blogId/like', async (req,res) => {
    try{
        const foundBlog = await db.Blog.findById(req.params.blogId)
        foundBlog.likes++
        await db.Blog.findByIdAndUpdate(req.params.blogId, foundBlog, {new:true})
        res.redirect(`/blogs/${req.params.blogId}`);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

module.exports = router;