
const express = require('express');

const reviewController = require('../controllers/review.controller');

const router = express.Router();

router.post('/', reviewController.addReview);
router.delete('/:id', reviewController.deleteReview);
router.get('/book/:id', reviewController.listReviewsForBook);
router.get('/author/:id', reviewController.listReviewsForAuthor);

module.exports = router;