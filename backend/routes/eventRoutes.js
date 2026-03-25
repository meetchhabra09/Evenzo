const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent, getEventsByClub } = require('../controllers/eventController');
const { protect, organizer } = require('../middleware/auth');

router.get('/', getEvents);
router.get('/:id', getEventById);
router.get('/club/:clubId', getEventsByClub);
router.post('/', protect, organizer, createEvent);
router.put('/:id', protect, organizer, updateEvent);
router.delete('/:id', protect, organizer, deleteEvent);

module.exports = router;
