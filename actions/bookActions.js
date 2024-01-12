const Book = require("../models/book");

async function addBook(author, title, yearOfPublication, price) {
    const book = await Book.create({author, title, yearOfPublication, price});
    console.log("Book created: ", book.title);
    return book;
}

async function listBooks() {
    const books = await Book.find();
    console.log("Books: ", books.length);
    return books;
}

async function updateBook(bookId, author, title, yearOfPublication, price) {
    const book = await Book.findById(bookId);
    if(book){
        book.author = author;
        book.title = title;
        book.yearOfPublication = yearOfPublication;
        book.price = price;
        await book.save();
        console.log("Book updated: ", book.title);
    }
    return book;
}

async function deleteBook(bookId) {
    const book = await Book.findByIdAndDelete(bookId);
    console.log("Book deleted: ", book.ok);
    return book;
}

module.exports = {
    addBook,
    listBooks,
    updateBook,
    deleteBook,
};