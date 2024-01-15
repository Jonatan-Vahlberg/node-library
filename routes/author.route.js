
const express = require('express');

const authorController = require('../controllers/author.controller');

const router = express.Router();

router.get('/', authorController.listAuthors);
router.post('/', authorController.addAuthor);
router.get('/:id', authorController.getAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;