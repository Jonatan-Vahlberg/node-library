

class BookGenre {
    static UNKNOWN = 'unknown';
    static FANTASY = 'fantasy';
    static SCIENCE_FICTION = 'science_fiction';
    static ROMANCE = 'romance';
    static MYSTERY = 'mystery';
    static HORROR = 'horror';
    static THRILLER = 'thriller';
    static WESTERN = 'western';

    static getGenres() {
        return [
            BookGenre.UNKNOWN,
            BookGenre.FANTASY,
            BookGenre.SCIENCE_FICTION,
            BookGenre.ROMANCE,
            BookGenre.MYSTERY,
            BookGenre.HORROR,
            BookGenre.THRILLER,
            BookGenre.WESTERN,
        ];
    }

    static getGenre(genre) {
        let foundGenre = this.getGenres().find((g) => g === genre);
        if (!foundGenre) {
            return BookGenre.UNKNOWN;
        }
        return foundGenre;
    }
}

module.exports = {
    BookGenre,
};