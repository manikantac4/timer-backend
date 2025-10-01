const express = require('express');
const router = express.Router();
const alarmController = require('../controllers/alarmController');

router.get('/', alarmController.getAlarms);
router.post('/', alarmController.createAlarm);
router.put('/:id', alarmController.updateAlarm); // optional for future
router.delete('/:id', alarmController.deleteAlarm);

module.exports = router;
