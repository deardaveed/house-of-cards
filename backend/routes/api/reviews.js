// backend/routes/api/reviews.js
const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Review } = require('../../db/models');

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

// Create a review
router.post('/', validateReview, async (req, res) => {
  const { userId, content, pokerRoomId } = req.body;
  const review = await Review.create({ userId, content, pokerRoomId });
  return res.json(review);
});

// Update a review
router.put('/:id', validateReview, async (req, res) => {
  const { userId, content, pokerRoomId } = req.body;
  const review = await Review.findByPk(req.params.id);
  await review.update({ userId, content, pokerRoomId });
  return res.json(review);
});

// Delete a review
router.delete('/:id', async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  await review.destroy();
  return res.json(review);
});

module.exports = router;
