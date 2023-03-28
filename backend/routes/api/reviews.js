// backend/routes/api/reviews.js
const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Review } = require('../../db/models'); // do I need this? or include the review model instead?

const router = express.Router();

const validateReview = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a review.'),
  handleValidationErrors
];

// Get all reviews
router.get('/', async (req, res) => {
  const reviews = await Review.findAll();
  return res.json(reviews);
});

// Get a single review
router.get('/:id', async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  return res.json(review);
});

module.exports = router;
