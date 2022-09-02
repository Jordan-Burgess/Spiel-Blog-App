require("../config/db.connection");

module.exports = {
    Blog: require('./Blog'),
    Comment: require('./Comments'),
    User: require('./User'),
    Genre: require('./Genre')
}

