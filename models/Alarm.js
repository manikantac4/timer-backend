const mongoose = require('mongoose');

const AlarmSchema = new mongoose.Schema({
  message: { type: String, required: true },
  time: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Alarm', AlarmSchema);
