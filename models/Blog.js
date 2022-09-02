const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "title can not be empty"],
        }, 
        content: {
            type: String,
            required: [true, "content can not be empty"],
        }, 
        likes: {
            type: Number,
            min: [0, 'you can not add a negative number'],
            required: [true, "number can not be empty"],
        },
         
        date: {
            type: String,
            required: [true, "date can not be empty"],
        }, 
        genre: {
            type: String,
            enum: ['travel','food','tech','design', 'education'],
            required: [true, "title can not be empty"],
        },
        img: {
            type: String, 
            required: [true, "Image cannot be missing"],
        },
        username: {
            type: mongoose.Types.ObjectId,
            ref: "User",
          },
}, {timestamps: true,});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;


// use first one in comments