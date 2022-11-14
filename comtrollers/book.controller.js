const Book = require('../models/Book.model.js')

module.exports.bookController = {
    postBook: (req, res) => {
        Book.create({
            title: req.body.title,
            author: req.body.author,
            genres: req.body.genres
        }).then((book) => {
            res.json(book)
        })
    },
    deleteBook: (req, res) => {
        Book.findByIdAndDelete(req.params.bookId).then(() => {
            res.json('Books delete')
        })
    },
   patchBook: (req, res) => {
        Book.findByIdAndRemove(req.params.bookId, {
            title: req.body.title,
            author: req.body.author,
            genres: req.body.genres
        }, {new: true}).then(() => {
            res.json('Books remove')
        })
   },
   getAllBook: (req, res) => {
    Book.find({}).then((book) => {
        res.json(book)
    })
   },
   getBookById: (req, res) => {
    Book.findById(req.params.bookId).then((book) => {
        res.json(book)
    })
   },
   getBookGenres: (req, res) => {
    Book.find({genres: req.params.bookId}, {}).then((book) => {
        res.json(book)
    })
   }
}