const mongoose = require('mongoose');

const genresSchema = mongoose.Schema({
  title: String,
  text: String,
});

const Genres = mongoose.model('Genres', genresSchema);

module.exports = Genres;
