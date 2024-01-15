var {  Schema, model } = require('mongoose');

var bookSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    title: { type: String, required: true },
    yearOfPublication: { type: Number, required: true },
    price: { type: Number, required: true }
});

bookSchema.methods.toString = function () {
    return `${this.title} by ${this.author.name}`;
};

var Book = model('Book', bookSchema);

module.exports = Book;
