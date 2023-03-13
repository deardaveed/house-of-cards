// backend/routes/api/users.js
const express = require('express')

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your first name.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your last name'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;
    const user = await User.signup({ firstName, lastName, email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user: user
    });
  }
);

module.exports = router;


fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-Token": "GuaaUVCO-d8oHJuvS9hqWp4mzDKthM-gapnk"
  },
  body: JSON.stringify({
    email: 'erman',
    username: 'dey',
    password: 'password',
    firstName: '',
    lastName: ''
  })
}).then(res => res.json()).then(data => console.log(data));