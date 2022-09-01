const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    genres: {
        type: Array
       },
    blogPost: {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
}, {timestamps: true,});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;


// use first one in comments