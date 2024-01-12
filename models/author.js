
var {  Schema, model } = require('mongoose');
const { BookGenre } = require('../utils/enums');

var authorSchema = new Schema({
    name: { type: String, required: true },
    yearOfBirth: { type: Number, required: true },
    favouriteGenre: { type: String, required: false }
});

authorSchema.pre('save', function (next) {
    const author = this;
    console.log("pre save pre", author.isNew, author.modifiedPaths());
    if (author.isModified('favouriteGenre') || author.isNew) {
        author.favouriteGenre = author.favouriteGenre.toLowerCase();
        author.favouriteGenre = BookGenre.getGenre(author.favouriteGenre);
    }
    next();
})

var Author = model('Author', authorSchema);

module.exports = Author;