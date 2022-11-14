const Genres = require('../models/Genres.model')

module.exports.genresController = {
    getAllGenres: (req, res) => {
        Genres.find({}).then((genres) => {
            res.json(genres)
        })
    },
    deleteGenres: (req, res) => {
        Genres.findByIdAndDelete(req.params.genresId).then(() => {
            res.json('Жанр удален!')
        })
    },
    postGenres: (req, res) => {
        Genres.create({
            title: req.body.title,
            text: req.body.text
        }).then((genres) => {
            res.json(genres)
        })
    }




}