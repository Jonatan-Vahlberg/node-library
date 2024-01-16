const Review = require("../models/review.model");

async function addReview(req, res) {
    const {author, book, rating, review} = req.body;
    try {
        const review = await Review.create({author, book, rating, review});
        console.log("Review created: ", review.review);
        res.status(201).json(review);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function listReviewsForBook(req, res) {
    const bookId = req.params.id;
    try {
        const reviews = await Review.find({book: bookId});
        console.log("Reviews: ", reviews.length);
        res.status(200).json(reviews);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function listReviewsForAuthor(req, res) {
    const authorId = req.params.id;
    try {
        const reviews = await Review.find({author: authorId});
        console.log("Reviews: ", reviews.length);
        res.status(200).json(reviews);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function deleteReview(req, res) {
    const reviewId = req.params.id;
    try {
        const review = await Review.findByIdAndDelete(reviewId);
        console.log("Review deleted: ", review.ok);
        res.status(200).json({
            message: "Review deleted",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    addReview,
    listReviewsForBook,
    listReviewsForAuthor,
    deleteReview,
};