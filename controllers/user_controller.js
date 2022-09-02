const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const { User } = require('../models')

router.use(express.json());

router.use(express.urlencoded({ extended: false}));


//User Login Connection to EJS
router.get('/login', (req,res) => {
    res.render('users/login.ejs');
})


//User Register Connection to EJS
router.get('/register', (req,res) => {
    res.render('users/register.ejs');
})

// //User Login Route
// router.post('/login', async (req,res, next) => {
//     try {
//         let formData = req.body;
//         let foundUser = await User.findOne({email: formData.email});
//         if(!foundUser) {
//             return res.redirect('/register')
//         } else {
//             const match = await bcrypt.compare(formData.password, foundUser.password);
//             console.log(match);
//             if (!match) return res.send('Email or password is incorrect');
//             req.session.currentUser = {
//                 id: foundUser._id, 
//                 username: foundUser.usernamme
//             };
//             return res.redirect('/blogs');
//         }
//     } catch (err) {
//         console.log(err)
//         next();
//     }
// })

// //User Registration Route
// router.post('/register', async (req,res, next) => {
//     try {
//         let formData = req.body;
//         let foundUser = await User.exists({email: formData.email});
//         if (foundUser) {
//             return res.redirect('/login')
//         } else {
//             let salt = await bcrypt.genSalt(12);
//             console.log(`My salt is ${salt}`)
//             let hash = await bcrypt.hash(formData.password, salt);
//             console.log(`My hash is ${hash}`)
//             formData.password = hash;

//             const newUser = await User.create(formData);
//             console.log(`My new user is ${newUser}`)
//             return res.redirect('/login')
//         }
//     } catch (err) {
//         console.log(err);
//         next();
//     }
// })

// //User Logout Function 

// router.get('/logout', async (req, res) => {
//     try {
//         await req.session.destroy();
//         return res.redirect('/login');
//     } catch (error) {
//         console.log(error)
//         return res.send(error)
//     }
// })

module.exports = router;