require("../config/db.connection");

module.exports = {
    Blog: require('./Blog'),
    Comment: require('./Comments'),
    User: require('./User'),
    Genre: require('./Genre')
}

mongoose.connect( process.env.MONGODB_URI || "mongodb+srv://spiel:spiel@cluster0.rg5icpe.mongodb.net/?retryWrites=true&w=majority" );
