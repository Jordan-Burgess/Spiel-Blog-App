// const express = require('express')

// const router = express.Router()

// router.use(express.json());
// router.use(express.urlencoded({ extended: false }));

// //Make sure this is the right file path
// const db = require('../models/comments_controller.js')


// //All Comments Index
// router.get('/', async (req,res) => {
//     try {
//     const allComments = await db.Blog.find().populate('blog').exec()
//     const allBlogs = await db.Blogs.find()
//     res.render('comments/index.ejs', { comments: allComments, blogs: allBlogs })
//     } catch (err) {
//         console.log(err)
//         next()
//     }
// }) 

// //New Comment Route 
// router.get('/new', (req,res) => {
//     res.send('new comment')
// })

// //Show Comment Route
// router.get('/:blogId', async (req,res,next) => {
//     try {
//         const foundComment = await db.Comments.findById(req.params.id).populate('blog').exec()
//         res.render('comments/show.ejs', { comment: foundComment })
//     } catch (err) {
//         console.log(err)
//         next()
//     }
// })

// //Edit Comment Route 
// router.get('/:blogId/edit', async (req,res,next) => {
//     res.send('comment edit')
// })

// //Create Comment Route
// router.post('/', async (req,res, next) => {
//     try {
//         const newComment = await db.Comments.create(req.body)
//         res.redirect('/comments' + newComment._id)
//     } catch (err) {
//         console.log(err)
//         next()
//     }
// })

// //Delete Comment Route
// router.delete('/:blogId', async (req, res, next) => {
//     res.send('comment delete')
// })

// //Update Comment Route
// router.put('/:blogId', (req, res, next) => {
//     res.send('comment update')
// })

// module.exports = router