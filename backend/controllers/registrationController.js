const Registration = require('../models/Registration');
const Event = require('../models/Event');
const User = require('../models/User');
const generateQR = require('../utils/generateQR');
const { v4: uuidv4 } = require('crypto');

// Generate a unique ticket ID
const generateTicketId = () => {
  return 'EVZ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 7).toUpperCase();
};

// @desc    Register for an event
// @route   POST /api/registrations/:eventId
exports.registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if already registered
    const existing = await Registration.findOne({ user: req.user._id, event: req.params.eventId });
    if (existing) {
      return res.status(400).json({ message: 'You are already registered for this event' });
    }

    // Check max participants
    if (event.maxParticipants > 0 && event.registrationCount >= event.maxParticipants) {
      return res.status(400).json({ message: 'Event is full' });
    }

    const ticketId = generateTicketId();

    // Generate QR code
    const qrData = JSON.stringify({
      ticketId,
      eventId: event._id,
      userId: req.user._id,
      eventTitle: event.title
    });
    const qrCode = await generateQR(qrData);

    const registration = await Registration.create({
      user: req.user._id,
      event: req.params.eventId,
      ticketId,
      qrCode,
      formResponses: req.body.formResponses || {}
    });

    // Update event registration count
    event.registrationCount += 1;
    await event.save();

    // Add to user's registered events
    await User.findByIdAndUpdate(req.user._id, {
      $addToSet: { registeredEvents: req.params.eventId }
    });

    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my registrations
// @route   GET /api/registrations/my
exports.getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ user: req.user._id })
      .populate({
        path: 'event',
        populate: { path: 'organizer', select: 'name email' }
      })
      .sort({ createdAt: -1 });

    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Check in with QR code
// @route   PUT /api/registrations/checkin/:ticketId
exports.checkIn = async (req, res) => {
  try {
    const registration = await Registration.findOne({ ticketId: req.params.ticketId });

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    if (registration.checkedIn) {
      return res.status(400).json({ message: 'Already checked in' });
    }

    registration.checkedIn = true;
    registration.checkedInAt = new Date();
    registration.status = 'attended';
    await registration.save();

    res.json({ message: 'Check-in successful', registration });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get registrations for an event (organizer)
// @route   GET /api/registrations/event/:eventId
exports.getEventRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ event: req.params.eventId })
      .populate('user', 'name email college department year')
      .sort({ createdAt: -1 });

    const stats = {
      total: registrations.length,
      checkedIn: registrations.filter(r => r.checkedIn).length,
      pending: registrations.filter(r => !r.checkedIn).length
    };

    res.json({ registrations, stats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
