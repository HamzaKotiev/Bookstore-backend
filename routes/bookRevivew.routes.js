const { Router } = require('express');
const { BookReviewController } = require('../comtrollers/bookReview.controlle');

const router = Router();


router.post('/post', BookReviewController.postBookReview);
router.delete('/delete/:bookreviewId', BookReviewController.getBookReviewByBook);
router.get('/:bookreviewId', BookReviewController.getBookReviewByBook)


module.exports = router;
