// Testfil: author.model.test.js

const mongoose = require('mongoose');
const Author = require('../../models/author.model');

require('../setup');

// Test Suite describe - Describe används för att gruppera relaterade testfall.
describe('Author Model Unit Tests', () => {

    
    // Testfall - Testfall är de faktiska testerna som körs.
    it('should create an author', async () => {
        const authorData = {
            name: "Test Author",
            yearOfBirth: 1990,
            favouriteGenre: "Fantasy"
        };
        const author = await Author.create(authorData);

        // expect - Används för att göra assertions.
        // toEqual - Används för att jämföra två värden.
        expect(author.name).toEqual(authorData.name);
        expect(author.yearOfBirth).toEqual(authorData.yearOfBirth);
        expect(author.favouriteGenre).toBeDefined();
    });

    it('should require name and yearOfBirth fields', async () => {
        const authorData = {
            favouriteGenre: "Fantasy"
        };
        try {
            const author = await Author.create(authorData);
        } catch (error) {
            // toBeDefined - Används för att kolla om ett värde är definierat.
            expect(error.errors.name).toBeDefined();
            expect(error.errors.yearOfBirth).toBeDefined();
        }

    });
});
