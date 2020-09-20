const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Middleware
async function getStudent(req, res, next) {
    let student;
    try {
        student = await Student.findById(req.params.id);
        if (student == null) {
            return res.status(404).json({
                message: "Cannot find user"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
    res.student = student;
    next();
}

// Get all
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get one
router.get('/:id', getStudent, (req, res) => {
    //res.json(res.student);
    res.json({
        name: res.student.name,
        email: res.student.email
    });
});

// Create one
router.post('/', async (req, res) => {
    try {
        const student = new Student({
            name: req.body.name,
            email: req.body.email
        });

        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// Update one
router.patch('/:id', getStudent, async (req, res) => {
    if (req.body.name != null) {
        res.student.name = req.body.name;
    }
    if (req.body.email != null) {
        res.student.email = req.body.email;
    }
    try {
        const updatedStudent = await res.student.save();
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

// Delete one
router.delete('/:id', getStudent, async (req, res) => {
    try {
        await res.student.remove();
        res.json({
            message: 'Deleted student'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;
