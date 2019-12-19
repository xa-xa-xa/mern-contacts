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
});

/**
 * @route POST api/contacts
 * @desc Add new contacts
 * @access Private
 */
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type, comments } = req.body;
    try {
      const newContact = new Contact({
        name,
        phone,
        email,
        type,
        comments,
        photo,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log('*: error', error);
      res.status(500).send('Server Error');
    }
  }
);
/**
 * @route PUT api/contacts/:id
 * @desc Update users contact
 * @access Private
 */
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type, comments } = req.body;
  // Build Contact Object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;
  if (comments) contactFields.comments = comments;
  if (photo) contactFields.photo = photo;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });
    // Make user owns a contact
    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized edit this contact' });

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    console.log('*: error', error);
    res.status(500).send('Server Error');
  }
});

/**
 * @route DELETE api/contacts/:id
 * @desc Delete users contact
 * @access Private
 */
router.delete('/:id', (req, res, next) => {
  try {
    Contact.findOneAndDelete({ _id: req.params.id }).then(() => {
      res.status(200).json({ message: 'Deleted!' });
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
