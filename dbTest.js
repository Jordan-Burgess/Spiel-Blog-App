require('./config/db.connection')
//import model
const mongoose = require('mongoose')

const db = require('./models')
// console.log(db.Blog)

async function createProduct(data){
    try{

        const newBlog = await db.Blogs.create(data)
        console.log(newBlog)

    }catch(err){
        throw new Error(err)
    }
}