
var {  Schema, model } = require('mongoose');

var authorSchema = new Schema({
    name: { type: String, required: true },
    yearOfBirth: { type: Number, required: true },
    favouriteGenre: { type: String, required: false }
});

var Author = model('Author', authorSchema);

module.exports = Author;