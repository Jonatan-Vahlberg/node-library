
const connectToDB = require("./config/database");
const { addAuthor, listAuthors, updateAuthor, deleteAuthor } = require("./actions/authorActions");
const { addBook, listBooks, updateBook, deleteBook } = require("./actions/bookActions");
const { addReview, listReviewsForBook, deleteReview, listReviewsForAuthor } = require("./actions/reviewActions");
const { default: mongoose } = require("mongoose");




async function run() {
    connectToDB("library");

    try {
        // Authors
        const author1 = await addAuthor("J.K. Rowling", 1965, "Fantasy");
        const author2 = await addAuthor("J.R.R. Tolkien", 1892, "Fantasy");
        const author3 = await addAuthor("RL Stine", 1943, "Horror");
        const author4 = await addAuthor("Svenska Akademien", 1786, "Dictionary");
        
        const authors = await listAuthors();

        const updatedAuthor1 = await updateAuthor(author1._id, "Joanne Rowling", 1965, "Fantasy");

        await deleteAuthor(author4._id);

        // Books
        const book1 = await addBook(author1._id, "Harry Potter and the Philosopher's Stone", 1997, 10);
        const book2 = await addBook(author2._id, "The Lord of the Rings", 1954, 15);
        const book3 = await addBook(author3._id, "Goosebumps", 1992, 5);
        const book4 = await addBook(author4._id, "Svenska Akademiens Ordlista", 1786, 20);

        const books = await listBooks();

        const updatedBook1 = await updateBook(book1._id, author1._id, "Harry Potter and the Sorcerer's Stone", 1997, 10);

        await deleteBook(book4._id);

        //! EXTRA review
        const review1 = await addReview(author1._id, book1._id, 4, "Great book!");
        const review2 = await addReview(author1._id, book1._id, 1, "Not so great book!");
        const review3 = await addReview(author2._id, book2._id, 5, "Awesome book!");

        const reviewsForBook1 = await listReviewsForBook(book1._id);
        const reviewsForAuthor2 = await listReviewsForAuthor(author2._id);

        await deleteReview(review1._id);

        await mongoose.connection.dropDatabase()
        await mongoose.connection.close()

    } catch (error) {
        console.log(error.message);
    }
}

run();