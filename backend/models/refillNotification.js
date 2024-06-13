const mongoose = require('mongoose');

const refillNotificationShema = new mongoose.Schema(
    {
        rack:{
            type: mongoose.Schema.ObjectId,
            ref: 'Rack',
            required : true
        },
        box:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Box',
            required : true
        },
        quantity:
        {
            type: Number,
            required: true
        }
    }
);

module.exports= mongoose.model("RefillNotification",refillNotificationShema);