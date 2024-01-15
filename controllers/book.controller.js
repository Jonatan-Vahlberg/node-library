const Book = require("../models/book");

async function addBook(req, res) {
    const {author, title, yearOfPublication, price} = req.body;
    try {
        const book = await Book.create({author, title, yearOfPublication, price}).withAuthor();

        console.log("Book created: ", book.title);
        res.status(201).json(book);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function listBooks(req, res) {
    try {
        const books = await Book.find().populate("author");
        console.log("Books: ", books.length);
        res.status(200).json(books);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function getBook(req, res) {
    const bookId = req.params.id;
    try {
        const book = await Book.findById(bookId).populate("author");
        console.log("Author: ", book.title);
        res.status(200).json(book);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function updateBook(req, res) {
    const bookId = req.params.id;
    const {author, title, yearOfPublication, price} = req.body;

    try {
        const book = await Book.findById(bookId).populate("author");
        if(book){
            book.author = author;
            book.title = title;
            book.yearOfPublication = yearOfPublication;
            book.price = price;
            await book.save();
            console.log("Book updated: ", book.title);
            res.status(200).json(book);
        }
        res.status(404).json({message: "Book not found"});
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function deleteBook(bookId) {
    try {
        const book = await Book.findByIdAndDelete(bookId);
        console.log("Book deleted: ", book.ok);
        res.status(200).json({
            message: "Book deleted",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    addBook,
    listBooks,
    getBook,
    updateBook,
    deleteBook,
};