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
            default: 0,
            required: [true, "number can not be empty"],
        },
         
        date: {
            type: Date,
            required: [true, "date can not be empty"],
            default: Date.now
        }, 
        genre: {
            type: String,
            enum: ['Travel','Food','Tech','Design', 'Education'],
            required: [true, "title can not be empty"],
        },
        img: {
            type: String, 
        },
        username: {
            type: mongoose.Types.ObjectId,
            ref: "User",
          },
}, {timestamps: true,});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;


// use first one in comments