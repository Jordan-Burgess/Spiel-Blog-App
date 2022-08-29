const express = require('express');
const methodOverride = require('method-override');
const { PromiseProvider } = require('mongoose');

//Make sure this is the right file path
require('./config/db.connection');

const blogsController = require('./controllers/blog_controller')


require('dotenv').config()
const app = express();
const PORT = process.env.PORT
app.set('view engine', 'ejs')

//Middleware
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use('/blogs', blogsController);

//Home Route
app.get('/', (req,res) => {
    res.render('home.ejs')
})

// 404 Not Found 
app.get('*', (req,res) => {
    res.render('404')
})

//Server
app.listen(PORT, () => {console.log(`Listening on Port: ${PORT}`)});