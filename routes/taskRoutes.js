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
router.post ('/', (req, res) => {
    const {task} = req.body;
    const newTask = { id: uuid(), task, completed: false }; 

    let tasks = JSON.parse(fs.readFileSync('./data/tasks.json', 'utf-8'));
    tasks.push(newTask);
    fs.writeFileSync('./data/tasks.json', JSON.stringify(tasks));

    res.json(newTask);
});

// Endpoint to delete a task
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    let tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
    tasks = tasks.filter(task => task.id !== id);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks));

    res.json({ message: 'Task deleted successfully' });
});

module.exports = router