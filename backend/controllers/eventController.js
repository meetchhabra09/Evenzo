const Event = require('../models/Event');

// @desc    Create a new event
// @route   POST /api/events
exports.createEvent = async (req, res) => {
  try {
    const eventData = { ...req.body, organizer: req.user._id };
    const event = await Event.create(eventData);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all events (with filters)
// @route   GET /api/events
exports.getEvents = async (req, res) => {
  try {
    const { category, department, status, search, page = 1, limit = 12 } = req.query;
    const query = {};

    if (category) query.category = category;
    if (department) query.department = department;
    if (status) query.status = status;
    if (search) query.$text = { $search: search };

    const events = await Event.find(query)
      .populate('organizer', 'name email')
      .populate('club', 'name logo')
      .sort({ date: 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Event.countDocuments(query);

    res.json({
      events,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single event by ID
// @route   GET /api/events/:id
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizer', 'name email profilePic')
      .populate('club', 'name logo description');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update event
// @route   PUT /api/events/:id
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this event' });
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete event
// @route   DELETE /api/events/:id
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this event' });
    }

    await event.deleteOne();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get events by club
// @route   GET /api/events/club/:clubId
exports.getEventsByClub = async (req, res) => {
  try {
    const events = await Event.find({ club: req.params.clubId })
      .populate('organizer', 'name email')
      .sort({ date: -1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
