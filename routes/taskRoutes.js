const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4:uuid } = require('uuid');


//Endpoint to get all tasks
router.get('/', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync('./data/tasks.json', 'utf-8'));
    res.json(tasks);
});


//endpoint to add a new task
router.post('/', (req, res) => {
    const { task } = req.body;
    const newTask = { id: uuid(), task, completed: false };

    const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
    tasks.push(newTask);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));

    res.json(newTask);
});

module.exports = router