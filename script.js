// Variables para manejar tareas, proyectos y tareas completadas
let tasks = [];
let projects = [];
let completedTasks = [];

// Función para agregar una nueva tarea
function addTask() {
    const newTask = document.getElementById('new-task').value;
    tasks.push(newTask);
    updateTaskList();
}

// Función para agregar un nuevo proyecto
function addProject() {
    const newProject = document.getElementById('new-project').value;
    projects.push(newProject);
    updateProjectList();
}

// Función para completar una tarea
function completeTask(index) {
    const completedTask = tasks.splice(index, 1);
    completedTasks.push(completedTask);
    updateTaskList();
    updateCompletedList();
}

// Función para actualizar la lista de tareas en la interfaz
function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.onclick = () => completeTask(index);
        taskList.appendChild(listItem);
    });
}

// Función para actualizar la lista de proyectos en la interfaz
function updateProjectList() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });
}

// Función para actualizar la lista de tareas completadas en la interfaz
function updateCompletedList() {
    const completedList = document.getElementById('completed-list');
    completedList.innerHTML = '';
    completedTasks.forEach(completedTask => {
        const listItem = document.createElement('li');
        listItem.textContent = completedTask;
        completedList.appendChild(listItem);
    });
}

// Inicializar las listas al cargar la página
window.onload = () => {
    updateTaskList();
    updateProjectList();
    updateCompletedList();
};
