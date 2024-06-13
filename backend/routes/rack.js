const express = require('express');
const router = express.Router();
const rackController = require('../controllers/rackController'); // Assurez-vous que le chemin est correct

router.post('', rackController.createRack);
router.get('', rackController.getRacks);
router.get('/:id', rackController.getRack);
router.patch('/:id', rackController.updateRack);
router.delete('/:id', rackController.deleteRack);

module.exports = router;