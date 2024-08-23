const express = require('express');
const Mentor = require('../models/Mentor');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.json(mentors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).json(mentor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
