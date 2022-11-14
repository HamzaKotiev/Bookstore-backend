const { Router } = require('express');
const { autherController } = require('../comtrollers/author.controller.js');

const router = Router('');
 router.get('/All', autherController.getAllAuthor);
 router.post('/post', autherController.postAuthor);
 router.delete('/:authorId', autherController.deleteAuthor);


module.exports = router;