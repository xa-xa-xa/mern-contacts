const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const User = require('../models/User');
const auth = require('../middleware/auth');

/**
 * @route GET api/contacts
 * @desc Get all users contacts
 * @access Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.log('*: err', err.message);
    res.status(500).send('server error');
  }
  res.send('Get all users contacts');
});

/**
 * @route POST api/contacts
 * @desc Add new contacts
 * @access Private
 */
router.post('/', auth, (req, res) => {
  res.send('Add new contact');
});
/**
 * @route PUT api/contacts/:id
 * @desc Update users contact
 * @access Private
 */
router.put('/:id', (req, res) => {
  res.send('Update users contact');
});

/**
 * @route DELETE api/contacts/:id
 * @desc Delete users contact
 * @access Private
 */
router.delete('/:id', (req, res) => {
  res.send('Update users contact');
});

module.exports = router;
