let tasks = [];
let filterTask = 'all';

function add() {
    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value.trim();
    if (description) {
        const newTask = {
            id: Math.floor(Math.random() * 10000),
            description: description,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        reader();
    }
}

function reader() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (filterTask === 'Incomplete') return !task.completed;
        if (filterTask === 'completed') return task.completed;
       
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggle(${task.id})">
            <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button> `;

        taskList.appendChild(li);
        console.log(li.innerHTML);
    });
}

function toggle(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        reader();
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        const newDescription = prompt('Edit task:', task.description);
        if (newDescription !== null) {
            task.description = newDescription.trim();
            reader();
        }
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    reader();
}

function filter(filter) {
    filterTask = filter;
    reader();
}

reader();