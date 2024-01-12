const Review = require("../models/review");

async function addReview(authorId, bookId, rating, reviewText) {
    const review = await Review.create({author: authorId, book: bookId, rating, reviewText});
    console.log("Review created: ", review.reviewText);
    return review;
}

async function listReviewsForBook(bookId) {
    const reviews = await Review.find({book: bookId});
    console.log("Reviews: ", reviews.length);
    return reviews;
}

async function listReviewsForAuthor(authorId) {
    const reviews = await Review.find({author: authorId});
    console.log("Reviews: ", reviews.length);
    return reviews;
}

async function deleteReview(reviewId) {
    const review = await Review.findByIdAndDelete(reviewId);
    console.log("Review deleted: ", review.ok);
    return review;
}

module.exports = {
    addReview,
    listReviewsForBook,
    listReviewsForAuthor,
    deleteReview,
};