const getAllTasks = (req, res) => {
    res.send('all items from the file');
}
const createTask = (req, res) => {
    res.send('create task');
}
const getTask = (req, res) => {
    res.send('get single task');
}
const updateTask = (req, res) => {
    res.send('update Task');
}
const deleteTask = (req, res) => {
    res.send('delete Task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}