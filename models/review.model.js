var { Schema, model } = require('mongoose');

var reviewSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: false }
});

var Review = model('Review', reviewSchema);

module.exports = Review;