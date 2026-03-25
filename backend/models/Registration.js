const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  qrCode: {
    type: String
  },
  ticketId: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    enum: ['registered', 'confirmed', 'cancelled', 'attended'],
    default: 'registered'
  },
  checkedIn: {
    type: Boolean,
    default: false
  },
  checkedInAt: {
    type: Date
  },
  formResponses: {
    type: Map,
    of: String
  }
}, {
  timestamps: true
});

// Prevent duplicate registration
registrationSchema.index({ user: 1, event: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);
