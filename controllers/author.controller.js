const Author = require("../models/author.model");

async function addAuthor(req, res) {
    const {name, yearOfBirth, favouriteGenre} = req.body;
   try {
    const author = await Author.create({name, yearOfBirth, favouriteGenre});
    console.log("Author created: ", author.name);
    res.status(201).json(author);
   }
    catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message});
    }
}

async function listAuthors(req, res) {
    try {
        const authors = await Author.find();
        console.log("Authors: ", authors.length);
        res.status(200).json(authors);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

async function getAuthor(req, res) {
    const authorId = req.params.id;
    try {
        const author = await Author.findById(authorId);
        console.log("Author: ", author.name);
        res.status(200).json(author);
    }
    catch (error) {
        if(error.kind === "ObjectId") {
            return res.status(404).json({message: "Author not found"});
        }
        res.status(500).json({message: error.message});
    }
}

async function updateAuthor(req, res) {
    const authorId = req.params.id;
    const {name, yearOfBirth, favouriteGenre} = req.body;
    try {
        const author = await Author.findById(authorId);
        if(author){
            author.name = name;
            author.yearOfBirth = yearOfBirth;
            author.favouriteGenre = favouriteGenre;
            await author.save();
            console.log("Author updated: ", author.name);
            res.status(200).json(author);
        }
    }
    catch (error) {
        if(error.kind === "ObjectId") {
            return res.status(404).json({message: "Author not found"});
        }
        res.status(500).json({message: error.message});
    }
}

async function deleteAuthor(req, res) {
    const authorId = req.params.id;
    try {
        const author = await Author.findByIdAndDelete(authorId);
        console.log("Author deleted: ", author.ok);
        res.status(200).json({
            message: "Author deleted",
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    addAuthor,
    listAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor,
};