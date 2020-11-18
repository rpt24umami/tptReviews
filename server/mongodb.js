const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

const reviewsSchema = new mongoose.Schema({
  description: String,
  title: String,
  rating: Number,
  helpful: Number,
  user: String,
  productId: Number,
  grade: Array,
  standards: Array,
});

const Review = mongoose.model('Review', reviewsSchema);

// Review.collection.drop({});

const firstValue = new Review({ description: 'Description', alignment: ['1', '2'] });

firstValue.save((err, review) => {
  if (err) {
    console.log(err);
  }
});

module.exports = { db, review: Review, schema: reviewsSchema };
