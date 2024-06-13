const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    box : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Box',
        required: true
    },
    quantity : {
        type: Number,
        required: true
    }
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;