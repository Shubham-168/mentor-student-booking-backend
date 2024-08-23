const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    availability: [{ type: Number }], // Array of available slots
});

module.exports = mongoose.model('Mentor', MentorSchema);
