const { PORT } = require('../config');
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

  const storeData = [];

  for (const store of stores) {
    try{
      const boxResponse = await fetch(`http://localhost:${PORT}/boxes/${store.box}`);
      const boxData = await boxResponse.json();
  
      const productResponse = await fetch(`http://localhost:${PORT}/rawMaterials/${boxData.rawMaterial}`);
      const productData = await productResponse.json();
  
      const storeInfo = {
        quantity: store.quantity,
        boxquantity: boxData.quantity,
        name: productData.name ,
        barrcode: productData.barreCode
      };
  
      storeData.push(storeInfo);
    }
    catch (error) {
      console.log(error);
    }
    
  }

  res.status(200).json(storeData);
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
  if (!store) {
    const newStore = new Store({
      box: req.params.id,
      quantity: parseInt(req.body.quantity)
    });
    await newStore.save();
    res.status(201).json(newStore);
  }
  else {
    store.quantity += parseInt(req.body.quantity);
    await store.save();
    res.status(200).json(store);
  }
}

exports.reduceQuantity = async (req, res) => {
  try{
    const store = await Store.findOne({ box: req.params.address });
    store.quantity -= parseInt(req.body.quantity);
    addBox(req, res);
    await store.save();
    res.status(200).json(store);
  }
  catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error reducing quantity' });
  }
  
}
// Path: backend/models/store.js


