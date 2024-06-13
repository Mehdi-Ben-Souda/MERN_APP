// models/RawMaterial.js
const mongoose = require('mongoose');

const rawMaterialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    barreCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('RawMaterial', rawMaterialSchema);
