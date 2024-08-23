const express = require('express');
const Student = require('../models/Student');

const router = express.Router();



router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
