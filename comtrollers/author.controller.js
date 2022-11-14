const Author = require('../models/Author.model')

module.exports.autherController = {
    getAllAuthor: (req, res) => {
        Author.find({}).then((author) => {
            res.json(author)
        })
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.authorId).then(() => {
            res.json('Автор удален')
        })
    },
    postAuthor: (req, res) => {
        Author.create({
            name: req.body.name,
            text: req.body.text
        }).then((author) => {
            res.json(author)
        })
    }




}