const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "title can not be empty"],
        }, 
        content: {
            type: String,
            required: [true, "content can not be empty"],
        }, likes: {
            type: Number,
            min: [0, 'you can not add a negative number'],
            required: [true, "number can not be empty"],
        }, 
        date: {
            type: String,
            required: [true, "date can not be empty"],
        }, 
        user: {
            type: String,
            required: [true, "user can not be empty"],
        }, 
        genre: {
            type: String,
            enum: ['travel','food','tech','design', 'education'],
            required: [true, "title can not be empty"],
        } 

}, {timestamps: true,});

const Blog = mongoose.model("Blog", productSchema);

module.exports = Blog;
