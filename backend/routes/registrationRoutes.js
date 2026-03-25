const express = require('express');
const router = express.Router();
const { registerForEvent, getMyRegistrations, checkIn, getEventRegistrations } = require('../controllers/registrationController');
const { protect, organizer } = require('../middleware/auth');

router.post('/:eventId', protect, registerForEvent);
router.get('/my', protect, getMyRegistrations);
router.put('/checkin/:ticketId', protect, checkIn);
router.get('/event/:eventId', protect, organizer, getEventRegistrations);

module.exports = router;
