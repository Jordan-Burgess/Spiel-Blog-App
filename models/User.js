const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "title can not be empty"],
        },
        email: {
            type: String,
            required: [true, "Please Provide An Email Address."],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please Provide A Password"],
        }, 
        gender: {
            type: String,
            enum: ['male','female'],
            required: [true, "gender can not be empty"],
        }, 

        joindate: {
            type: String,
            required: [true, "date can not be empty"],
        }, 

}, {timestamps: true,});

const Blog = mongoose.model("Blog", userSchema);

module.exports = Blog;
      
        
        
