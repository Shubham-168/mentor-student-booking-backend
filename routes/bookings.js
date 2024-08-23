const express = require('express');
const Booking = require('../models/Booking');
const Mentor = require('../models/Mentor');
const Student = require('../models/Student');
const router = express.Router();

router.post('/', async (req, res) => {
    const { mentorId, studentName, timestamp } = req.body;

    try {
        const student = new Student({ name: studentName });
        await student.save();

        const booking = new Booking({
            mentor: mentorId,
            student: student._id,
            timestamp: new Date(timestamp),
        });
        await booking.save();

        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
