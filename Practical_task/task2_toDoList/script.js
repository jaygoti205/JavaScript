let tasks = [];

function add() {
    let txt=document.getElementById("txt").value;
    if(txt===""||txt===" "){
       document.getElementById("error").innerText="* Please fill Text Box with your task";
    }
    else{
        tasks.push({
            id: Math.floor(Math.random() * 1000),
            task: txt,
            status: false
        });
        document.getElementById("error").innerText="*";
    }
    document.getElementById("txt").value="";
    display();
}

function display() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const div = document.createElement("div")
        div.setAttribute("class", "task");
        div.innerHTML = `<input type="checkbox" class="checkbox" name="check"  ${task.status ? 'checked' : ''} onchange="toggle(${task.id})">
                <p class="${task.status ? 'completed' : ''}">${task.task}</p>
                <button class="btnEdit" name="Edit" onclick="taskEdit(${task.id})">Edit</button> 
                <button class="btnDelete" name="delete" onclick="taskDelete(${task.id})">Delete</button>`
        taskList.appendChild(div);
    });
}

function toggle(id){
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.status = !task.status;
        display();
    }
}

function taskDelete(id){
    tasks = tasks.filter(t => t.id !== id);
    display();
}

function taskEdit(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        const editedTask = prompt('Edit task:', task.task);
        if (editedTask !== null) {
            task.task = editedTask.trim();
            display();
        }
    }
}

btnAdd.addEventListener("click", add);

