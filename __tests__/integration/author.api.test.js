
const request = require("supertest");
const app = require("../../app");

const Author = require("../../models/author.model");


const dummyAuthor = {
    name: "Test Author",
    yearOfBirth: 1990,
    favouriteGenre: "Fantasy"
};

describe("Integration tests for Author API", () => {

    it("should get all authors", async () => {
        const response = await request(app).get("/authors");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("length");
    });

    it("should get an author by id", async () => {
        const authorData = {...dummyAuthor};

        const author = await Author.create(authorData);

        const response = await request(app).get(`/authors/${author._id}`);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(author.name);
    });

    it("Should return 404 if author not found", async () => {
        const response = await request(app).get(`/authors/123`);
        expect(response.status).toBe(404);
    });

    it("should create an author", async () => {
        const authorData = {...dummyAuthor};

        const response = await request(app).post("/authors").send(authorData);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(authorData.name);
    });

    it("should require name and yearOfBirth fields", async () => {
        const authorData = {
            favouriteGenre: "Fantasy"
        };

        const response = await request(app).post("/authors").send(authorData);
        expect(response.status).toBe(500);
    });

    it("should update an author", async () => {
        const authorData = {...dummyAuthor};

        const author = await Author.create(authorData);

        const response = await request(app).put(`/authors/${author._id}`).send({
            name: "Updated Author",
            yearOfBirth: 1991,
            favouriteGenre: "Fantasy"
        });

        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Updated Author");
    });

    it("should delete an author", async () => {
        const authorData = {...dummyAuthor};

        const author = await Author.create(authorData);

        const response = await request(app).delete(`/authors/${author._id}`);
        expect(response.status).toBe(200);
    });
});