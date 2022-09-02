require("../config/db.connection");

module.exports = {
    Blog: require("./Blog"),
    Comments: require('./Comments'),
    Genres: require('./Genre'),
}