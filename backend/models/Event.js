const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    maxlength: 2000
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  endDate: {
    type: Date
  },
  time: {
    type: String,
    required: [true, 'Event time is required']
  },
  venue: {
    type: String,
    required: [true, 'Venue is required'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['tech', 'cultural', 'sports', 'workshop', 'seminar', 'hackathon', 'meetup', 'other']
  },
  department: {
    type: String,
    trim: true
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club'
  },
  maxParticipants: {
    type: Number,
    default: 0 // 0 = unlimited
  },
  registrationCount: {
    type: Number,
    default: 0
  },
  ticketPrice: {
    type: Number,
    default: 0 // 0 = free
  },
  image: {
    type: String,
    default: ''
  },
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled', 'completed'],
    default: 'published'
  },
  registrationDeadline: {
    type: Date
  },
  contactEmail: {
    type: String
  }
}, {
  timestamps: true
});

// Index for search
eventSchema.index({ title: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('Event', eventSchema);
