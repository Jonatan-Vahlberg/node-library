
const express = require('express');

const bookController = require('../controllers/book.controller');

const router = express.Router();

router.get('/', bookController.listBooks);
router.post('/', bookController.addBook);
router.get('/:id', bookController.getBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;