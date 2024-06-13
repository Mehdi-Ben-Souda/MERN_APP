const express = require('express');
const rawMaterialController = require('../controllers/rawMaterialController'); // Assurez-vous que le chemin d'accès est correct
const router = express.Router();

router.post('', rawMaterialController.createRawMaterial);
router.get('', rawMaterialController.getRawMaterials);
router.get('/:id', rawMaterialController.getRawMaterial);
router.put('/:id', rawMaterialController.updateRawMaterial);
router.delete('/:id', rawMaterialController.deleteRawMaterial);

module.exports = router;