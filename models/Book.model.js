const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    },
    genres: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genres'
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
