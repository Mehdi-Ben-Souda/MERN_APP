const Box = require('../models/box'); // Assurez-vous que le chemin d'accès est correct

// Create
exports.createBox = async (req, res) => {
  const newBox = new Box(req.body);
  const box = await newBox.save();
  res.status(201).json(box);
};

// Read
exports.getBoxes = async (req, res) => {
  const boxes = await Box.find();
  res.status(200).json(boxes);
};

exports.getBox = async (req, res) => {
  const box = await Box.findById(req.params.id);
  res.status(200).json(box);
};

// Update
exports.updateBox = async (req, res) => {
  const box = await Box.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(box);
};

// Delete
exports.deleteBox = async (req, res) => {
  await Box.findByIdAndRemove(req.params.id);
  res.status(200).json({ message: 'Box deleted successfully' });
};

exports.getBoxeByRawMaterialId = async (req, res) => {
  const box = await Box.findOne({ rawMaterial: req.params.id });
  res.status(200).json(box);
};

exports.BoxByProdId = async (id) => {
  const box = await Box.findOne({ rawMaterial: id });
  return box;
};