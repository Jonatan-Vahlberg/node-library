
const mongoose = require('mongoose');

const Author = require('../../models/author.model');
const Book = require('../../models/book.model');
const Review = require('../../models/review.model');

require('../setup');

const dummyAuthor = {
    name: "Test Author",
    yearOfBirth: 1990,
    favouriteGenre: "Fantasy"
};

const dummyBook = {
    title: "Test Book",
    yearOfPublication: 2020,
    price: 10
};

const dummyReview = {
    rating: 5,
    reviewText: "Test Review"
};

describe('Review Model unit tests', () => {

    // afterEach(async () => {
    //     await Book.deleteMany();
    //     await Author.deleteMany();
    //     await Review.deleteMany();
    // });

    it('should create a review', async () => {
        const authorData = {...dummyAuthor};
        const author = await Author.create(authorData);

        const bookData = {
            ...dummyBook,
            author: author._id
        };

        const book = await Book.create(bookData);

        const reviewData = {
            ...dummyReview,
            author: author._id,
            book: book._id
        };

        const review = await Review.create(reviewData);

        expect(review._id).toBeDefined();
    });

    it('should require rating, author and book fields', async () => {
        const reviewData = {
            reviewText: "Test Review"
        };

        try {
            const review = await Review.create(reviewData);
        } catch (error) {
            expect(error.errors.rating).toBeDefined();
            expect(error.errors.author).toBeDefined();
            expect(error.errors.book).toBeDefined();
        }
    });
});
