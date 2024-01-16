
const express = require("express");
const cors = require("cors");

const authorRouter = require("./routes/author.route");
const bookRouter = require("./routes/book.route");
const reviewRouter = require("./routes/review.route");

const connectToDB = require("./config/database");
connectToDB();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"]
}));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/reviews", reviewRouter);

app.listen(3000, () => {
    console.log("Server started");
});

module.exports = app;