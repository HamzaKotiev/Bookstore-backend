const { Router } = require('express');
const { genresController } = require('../comtrollers/genres.controller');

const router = Router();

router.post('/post', genresController.postGenres)
router.get('/allGenres', genresController.getAllGenres)
router.delete('/:genresId', genresController.deleteGenres)



module.exports = router;
