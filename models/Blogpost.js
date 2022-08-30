const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
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
            default: 0,
            min: [0, 'you can not add a negative number'],
            required: [true, "Please Provide A Number."],
            unique: true,
        },
        date: {
            type: String,
            required: [true, "Please Provide A date"],
        }, 
        user: {
            type: String,
            required: [true, "User can not be empty"],
        }, 

        genre: {
            type: String,
            enum: ['male', 'female'],
            required: [true, "gender can not be empty"],
        }, 

}, {timestamps: true,});

const Blog = mongoose.model("Blog", blogpostSchema);

module.exports = Blog;
      

