const BookReview = require('../models/BookReview.model')

module.exports.BookReviewController = {
    postBookReview: (req, res) => {
        BookReview.create({
            text: req.body.text,
            namereviewer: req.body.namereviewer,
            bookbeingreviewed: req.body.bookbeingreviewed,
        }).then((rev) => {
            res.json(rev)
        })
    },
    deleteBookReview: (req, res) => {
        BookReview.findByIdAndDelete(req.params.bookreviewId).then(() => {
            res.json('delete')
        })
    },
    getBookReviewByBook: (req, res) => {
        BookReview.find({bookbeingreviewed: req.params.bookreviewId}).then((rev) => {
            res.json(rev)
        })
    }
}