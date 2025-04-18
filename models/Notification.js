const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  recipients: {
    type: {
      type: String,
      enum: ['all', 'specific', 'department'], // Add 'specific' to the enum
      required: true,
    },
    value: { type: String, required: true }, // e.g., email or department ID
  },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Notification', notificationSchema);