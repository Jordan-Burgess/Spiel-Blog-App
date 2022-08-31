const express = require('express');;
const router = express.Router();

router.use(express.json());


//Make sure that this is the right file path for models 
// const blogs = require('../models/blogpost_models.js')
const db = require("../models")

//New Route
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Create route
router.post('/', async (req,res) => {
    const createdBlog = req.body;

    try {
        const newBlog = await db.Blogs.create(createdBlog);

        console.log(newBlog);

        res.redirect('/blogs');
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Show Route
router.get('/:blogIndex', async (req,res) => {
    try {
        const foundBlog = await db.Blogs.findById(req.params.blogIndex)
        res.render('show.ejs', {blog:foundBlog, id: foundBlog._id})
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Index Route
router.get('/', async (req,res) => {
    try {
        const allBlogs = await db.Blogs.find()
        const context =  {blogs: allBlogs};
        console.log(allBlogs)
        res.render('index.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Destroy/Delete
router.delete('./productId', async (req,res) => {
    try {
        const foundBlog = await db.Blogs.findByIdAndDelete(req.params.blogId)
        console.log(foundBlog)
        return res.redirect('/blogs');
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Edit Route
router.get('./blogId/edit', async (req,res) => {
    try {
        const foundBlog = await db.Blogs.findById(req.params.blogId)
        console.log(foundBlog)
        res.render('edit.ejs', { blog: foundBlog, id: foundBlog._id})
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

//Update Route 
router.put('./blogId', async (req,res) => {
    try{
        const updatedBlog = req.body;
        await db.Blogs.findByIdAndUpdate(req.params.blogId, updatedBlog, {new:true})
        res.redirect(`/blogs/${req.params.blogId}`);
    } catch(err) {
        console.log(err)
        res.redirect('/404')
    }
});

module.exports = router;