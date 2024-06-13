const mongoose = require('mongoose');

// Définissez le schéma pour le modèle Rack
const rackSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    boxes: [{
        box: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Box',
        },
        quantity: {
            type: Number,
            required: true
        },
        minquantity : {
            type: Number,
            required: false,
        }
    }]
});

// Créez le modèle Rack à partir du schéma
const Rack = mongoose.model('Rack', rackSchema);

// Exportez le modèle Rack
module.exports = Rack;