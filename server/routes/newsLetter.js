const express = require('express');
const router = express.Router();
const { getEmails, addEmail } = require('../controllers/newsLetterController')




// Get all emails
router.get('/', getEmails)

// add email
router.post('/', addEmail)



module.exports = router;

