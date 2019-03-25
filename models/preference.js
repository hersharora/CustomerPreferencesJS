const mongoose = require('mongoose');

const { Schema } = mongoose;

//todo: validations
const preferenceModel = new Schema(
    {
        customerId: { type: Number },
        name: { type: String },
        templateId: {
            type: String,
            enum: ['Single Image Ad', 'Carousel Ad'],
            default: 'Single Image Ad'
        },
        startDate: { type: Date },
        repeat: {
            type: String,
            enum: ['daily', 'weekly', 'monthly'],
            default: 'daily'
        },
        isActive: { type: Boolean, default: false }
    }
);

module.exports = mongoose.model('CustomerPreference', preferenceModel);
