const { Router } = require('express');
const { bookController } = require('../comtrollers/book.controller');

const router = Router();

router.patch

router.post('/post', bookController.postBook);
router.delete('/:bookId', bookController.deleteBook)
router.patch('/:bookId', bookController.patchBook)
router.get('/allbook', bookController.getAllBook)
router.get('/Allbook/:bookId', bookController.getBookById)
router.get('/Genres/:bookId', bookController.getBookGenres)


module.exports = router;
