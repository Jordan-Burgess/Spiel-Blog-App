const express = require('express');
const methodOverride = require('method-override');
// const { PromiseProvider } = require('mongoose');
// const session = require('express-session')
// const MongoStore = require('connect-mongo')

//Make sure this is the right file path
require('./config/db.connection');

//Controller Imports
const blogsController = require('./controllers/blog_controller')
const genresController = require("./controllers/genres_controller")

//Import Controllers 
// const controllers = require('./controllers')


require('dotenv').config()
const app = express();
const PORT = proess.env.PORT;
app.listen(process.env.PORT || 4000);
app.set('view engine', 'ejs')

//User Sessions
// app.use(
//     session[{
//         store: MongoStore.create({ mongoUrl: process.env.MONGO_URI}), 
//         secret: 'super secret', 
//         resave: false, 
//         saveUninitialized: false, 
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 7,
//         }
//     }]
// )


//Middleware
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use('/blogs', blogsController);
app.use('/genres', genresController)

//Home Route
app.get('/', (req,res) => {
    res.render('home.ejs')
})

// // 404 Not Found 
// app.get('*', (req,res) => {
//     res.render('404')
// })

//Server
app.listen(PORT, () => {console.log(`Listening on Port: ${PORT}`)});