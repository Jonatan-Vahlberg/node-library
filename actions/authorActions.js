const Author = require("../models/author");

async function addAuthor(name, yearOfBirth, favouriteGenre) {
   const author = await Author.create({name, yearOfBirth, favouriteGenre});
   console.log("Author created: ", author.name);
    return author; 
}

async function listAuthors() {
    const authors = await Author.find();
    console.log("Authors: ", authors.length);
    return authors;
}

async function updateAuthor(authorId, name, yearOfBirth, favouriteGenre) {
    const author = await Author.findById(authorId);
    if(author){
        author.name = name;
        author.yearOfBirth = yearOfBirth;
        author.favouriteGenre = favouriteGenre;
        await author.save();
        console.log("Author updated: ", author.name);
    }
    return author;
}

async function deleteAuthor(authorId) {
    const author = await Author.findByIdAndDelete(authorId);
    console.log("Author deleted: ", author.ok);
    return author;
}

module.exports = {
    addAuthor,
    listAuthors,
    updateAuthor,
    deleteAuthor,
};