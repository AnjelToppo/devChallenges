const Task = require('../models/task.model');

exports.getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            status: 'success',
            result: tasks.length,
            data: {
                tasks
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        })
    }
}

exports.createTask = async (req, res) => {
    try {
        // COME BACK LATER AND HANDLE BOARD ID
        const newTask = await Task.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                task: newTask
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const id = req.params.taskId;
        const task = await Task.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const id = req.params.taskId;
        await Task.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        })
    }
}