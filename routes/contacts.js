const express = require('express');
const router = express.Router();

/**
 * @route GET api/contacts
 * @desc Get all users contacts
 * @access Private
 */
router.get('/', (req, res) => {
  res.send('Get all users contacts');
});

/**
 * @route POST api/contacts
 * @desc Add new contacts
 * @access Private
 */
router.post('/', (req, res) => {
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
