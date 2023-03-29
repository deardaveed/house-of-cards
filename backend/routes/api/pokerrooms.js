// backend/routes/api/pokerrooms.js

const express = require('express');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { PokerRoom } = require('../../db/models');

const router = express.Router();


const validatePokerRoom = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name for the poker room.'),
  check('address')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an address for the poker room.'),
  check('city')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a city for the poker room.'),
  check('state')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a state for the poker room.'),
  check('zip')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a zip code for the poker room.'),
  check('phone')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a phone number for the poker room.'),
  check('website')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a website for the poker room.'),
  check('website')
    .isURL()
    .withMessage('Please provide a valid URL for the poker room.'),
  check('image')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an image URL for the poker room.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a description for the poker room.'),
  handleValidationErrors
];

// Get all poker rooms
router.get('/', async (req, res) => {
  const pokerRooms = await PokerRoom.findAll();
  return res.json(pokerRooms);
});

// Get a single poker room
router.get('/:id', async (req, res) => {
  const pokerRoom = await PokerRoom.findByPk(req.params.id);
  return res.json(pokerRoom);
});

// Create a poker room
router.post('/', validatePokerRoom, async (req, res) => {
  const { id, userId , name, address, city, state, zip, phone, website, image, description } = req.body;
  const pokerRoom = await PokerRoom.create({ userId, name, address, city, state, zip, phone, website, image, description });
  return res.json(pokerRoom);
});

// Update a poker room
router.put('/:id', validatePokerRoom, async (req, res) => {
  const { userId, name, address, city, state, zip, phone, website, image, description } = req.body;
  const pokerRoom = await PokerRoom.findByPk(req.params.id);
  await pokerRoom.update({ userId, name, address, city, state, zip, phone, website, image, description });
  return res.json(pokerRoom);
});


// Delete a poker room
router.delete('/:id', async (req, res) => {
  const pokerRoom = await PokerRoom.findByPk(req.params.id);
  await pokerRoom.destroy();
  return res.json(pokerRoom);
});

module.exports = router;
