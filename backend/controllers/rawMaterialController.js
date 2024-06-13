const RawMaterial = require('../models/raw_materiel'); // Assurez-vous que le chemin d'accès est correct

// Create
exports.createRawMaterial = async (req, res) => {
  const newRawMaterial = new RawMaterial(req.body);
  const rawMaterial = await newRawMaterial.save();
  res.status(201).json(rawMaterial);
};

// Read
exports.getRawMaterials = async (req, res) => {
  const rawMaterials = await RawMaterial.find();
  res.status(200).json(rawMaterials);
};

exports.getRawMaterial = async (req, res) => {
  const rawMaterial = await RawMaterial.findById(req.params.id);
  res.status(200).json(rawMaterial);
};

// Update
exports.updateRawMaterial = async (req, res) => {
  const rawMaterial = await RawMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(rawMaterial);
};

// Delete
exports.deleteRawMaterial = async (req, res) => {
  await RawMaterial.findByIdAndRemove(req.params.id);
  res.status(200).json({ message: 'Raw material deleted successfully' });
};