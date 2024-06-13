const express = require('express');
const boxController = require('../controllers/boxController'); // Assurez-vous que le chemin d'accès est correct
const router = express.Router();

router.post('', boxController.createBox);
router.get('', boxController.getBoxes);
router.get('/rawMaterial/:id', boxController.getBoxeByRawMaterialId);
router.get('/:id', boxController.getBox);
router.put('/:id', boxController.updateBox);
router.delete('/:id', boxController.deleteBox);

module.exports = router;