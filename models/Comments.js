const mongoose = require("mongoose");
const comments = require("./comments_models");

const commentsSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "username can not be empty"],
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
        blogpost: {
            type: String,
            required: [true, "post can not be empty"],
        }, 
        username: {
            type: mongoose.Types.ObjectId,
            ref: "User",
          },
          blogPost: {
            type: mongoose.Types.ObjectId,
            ref: "Blog",
          },
}, {timestamps: true,});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;


