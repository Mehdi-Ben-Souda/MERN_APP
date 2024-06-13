const Store = require('../models/store');
const { addBox } = require('./rackController');

// Create
exports.createStore = async (req, res) => {
  const newStore = new Store(req.body);
  const store = await newStore.save();
  res.status(201).json(store);
};

// Read
exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.status(200).json(stores);
};

exports.getStore = async (req, res) => {
    const store = await Store.findById(req.params.id);
    res.status(200).json(store);
    }

// Update  
exports.updateStore = async (req, res) => {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(store);
    }

// Delete

exports.deleteStore = async (req, res) => {
    await Store.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Store deleted successfully' });
    }


exports.augmentQuantity = async (req, res) => {
  const store = await Store.findOne({ box: req.params.id });
  store.quantity += parseInt(req.body.quantity);
  await store.save();
  res.status(200).json(store);
}

exports.reduceQuantity = async (req, res) => {
  const store = await Store.findOne({ box: req.params.address });
  store.quantity -= parseInt(req.body.quantity);
  addBox(req, res);
  await store.save();
  res.status(200).json(store);
}
// Path: backend/models/store.js


