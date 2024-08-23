const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    timestamp: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
