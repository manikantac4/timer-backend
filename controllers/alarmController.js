const Alarm = require('../models/Alarm');

exports.getAlarms = async (req, res) => {
  try {
    const alarms = await Alarm.find().sort({ time: 1 });
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAlarm = async (req, res) => {
  const { message, time } = req.body;
  try {
    const alarm = new Alarm({ message, time });
    await alarm.save();
    res.status(201).json(alarm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAlarm = async (req, res) => {
  const { message, time } = req.body;
  try {
    const alarm = await Alarm.findById(req.params.id);
    if (!alarm) return res.status(404).json({ message: 'Alarm not found' });
    if (message) alarm.message = message;
    if (time) alarm.time = time;
    await alarm.save();
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAlarm = async (req, res) => {
  try {
    const alarm = await Alarm.findById(req.params.id);
    if (!alarm) return res.status(404).json({ message: 'Alarm not found' });
    await alarm.remove();
    res.json({ message: 'Alarm deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
