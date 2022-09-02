const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema(
{
    genre: { type: String, required: [true, "Genre cannot be empty"]},
    img: {type: String, required: [true, "Image cannot be empty"]}
}, 

{ timestamps: true }
);

const Genre = mongoose.model("Genres", genreSchema);

module.exports = Genre;


// use first one in comments