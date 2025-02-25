const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Task name cannot be empty!']
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
        enum: ['👨‍💻', '💬', '☕', '🏋️', '📚', '⏰'],
        required: [true, 'Please select an icon']
    },
    status: {
        type: String,
        enum: ['In Progress', 'Completed', "Won't do", ""]
    },
    board: {
        type: mongoose.Schema.ObjectId,
        ref: 'Board',
        required: [true, 'Task must belong to a board']
    }
});

const Task = model('Task', taskSchema);
module.exports = Task;