
const mongoose = require('mongoose');

const Author = require('../../models/author.model');
const Book = require('../../models/book.model');

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

describe('Book Model unit tests', () => {

    it('should create a book', async () => {
        const authorData = {...dummyAuthor};
        const author = await Author.create(authorData);

        const bookData = {
            ...dummyBook,
            author: author._id
        };

        const book = await Book.create(bookData);

        expect(book.title).toEqual(bookData.title);
        expect(book.yearOfPublication).toEqual(bookData.yearOfPublication);
        expect(book.price).toEqual(bookData.price);
        expect(book.author).toEqual(author._id);
    });

    it('should require title, yearOfPublication, price and author fields', async () => {
        const bookData = {
            yearOfPublication: 2020,
            price: 10
        };

        try {
            const book = await Book.create(bookData);
        } catch (error) {
            console.log(error.message);
            expect(error.errors.title).toBeDefined();
            expect(error.errors.author).toBeDefined();
        }
    });
});
