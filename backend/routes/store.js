const express = require('express');

const storeController = require('../controllers/storeController'); // Assurez-vous que le chemin d'accès est correct

const router = express.Router();

router.post('', storeController.createStore);

router.get('', storeController.getStores);
router.get('/:id', storeController.getStore);
router.put('/:id', storeController.updateStore);
router.put('/add/:id', storeController.augmentQuantity);
router.put('/remove/:id', storeController.reduceQuantity);
router.delete('/:id', storeController.deleteStore);

module.exports = router;