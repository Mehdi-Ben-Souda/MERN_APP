const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
    rawMaterial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RawMaterial',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productionLine: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['magasin', 'ligne de production','en consomation','epuise'],
        required: true
    },
});

module.exports = mongoose.model('Box', boxSchema);
