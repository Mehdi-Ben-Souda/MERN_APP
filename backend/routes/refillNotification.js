const express= require('express');
const router = express.Router();

const refillNotificationController = require('../controllers/refillNotificationController');


router.post('', refillNotificationController.createRefillNotification);
router.get('', refillNotificationController.getAllRefillNotifications);
router.get('/:id', refillNotificationController.getRefillNotificationById);
router.patch('/:id', refillNotificationController.updateRefillNotificationById);
router.delete('/:id', refillNotificationController.deleteRefillNotificationById);

module.exports = router;