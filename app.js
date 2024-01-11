
const connectToDB = require("./config/database");
const { addAuthor, listAuthors, updateAuthor, deleteAuthor } = require("./actions/authorActions");
const { addBook, listBooks, updateBook, deleteBook } = require("./actions/bookActions");
const { addReview, listReviewsForBook, deleteReview, listReviewsForAuthor } = require("./actions/reviewActions");




function run() {
    connectToDB("library");

    try {
        // Authors
        addAuthor();
        listAuthors();
        updateAuthor();
        deleteAuthor();

        // Books
        addBook();
        listBooks();
        updateBook();
        deleteBook();

        //! EXTRA review
        // addReview()
        // listReviewsForBook()
        // listReviewsForAuthor()
        // deleteReview()

    } catch (error) {
        console.log(error.message);
    }
}

run();