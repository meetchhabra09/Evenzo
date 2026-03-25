const Club = require('../models/Club');

// @desc    Create a new club
// @route   POST /api/clubs
exports.createClub = async (req, res) => {
  try {
    const clubData = { ...req.body, admin: req.user._id, members: [req.user._id] };
    const club = await Club.create(clubData);
    res.status(201).json(club);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all clubs
// @route   GET /api/clubs
exports.getClubs = async (req, res) => {
  try {
    const clubs = await Club.find()
      .populate('admin', 'name email')
      .populate('members', 'name email')
      .sort({ name: 1 });

    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get club by ID
// @route   GET /api/clubs/:id
exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
      .populate('admin', 'name email profilePic')
      .populate('members', 'name email profilePic')
      .populate('events');

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    res.json(club);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update club
// @route   PUT /api/clubs/:id
exports.updateClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    if (club.admin.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add member to club
// @route   PUT /api/clubs/:id/members
exports.addMember = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    if (club.members.includes(req.body.userId)) {
      return res.status(400).json({ message: 'User is already a member' });
    }

    club.members.push(req.body.userId);
    await club.save();

    res.json({ message: 'Member added successfully', club });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
