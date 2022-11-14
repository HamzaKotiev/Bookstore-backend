const mongoose = require('mongoose');

const BookReviewSchema = mongoose.Schema({
  text: String,
  namereviewer: String,
  bookbeingreviewed: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Book'
  }

});

const BookReview = mongoose.model('BookReview', BookReviewSchema);

module.exports = BookReview;
