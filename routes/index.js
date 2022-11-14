const { Router } = require('express');

const router = Router();
router.use('/author', require('./author.routes'));
router.use('/Revivew', require('./bookRevivew.routes'));
router.use('/books', require('./books.routes'));
router.use('/genres', require('./genres.routes'));

module.exports = router;