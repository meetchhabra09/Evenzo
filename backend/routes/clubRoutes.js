const express = require('express');
const router = express.Router();
const { createClub, getClubs, getClubById, updateClub, addMember } = require('../controllers/clubController');
const { protect, organizer } = require('../middleware/auth');

router.get('/', getClubs);
router.get('/:id', getClubById);
router.post('/', protect, organizer, createClub);
router.put('/:id', protect, updateClub);
router.put('/:id/members', protect, addMember);

module.exports = router;
