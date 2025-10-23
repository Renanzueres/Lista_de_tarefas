// MODIFICADO (3b): Agora passamos o 'id' ao carregar as tarefas
window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    tasks.forEach(task => addTask(task.text, task.done, task.id)); 
    updateEmptyState();
};

document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");

    addTaskButton.addEventListener("click", () => {
        addTask();
    });

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    const clearButton = document.getElementById("clearCompletedButton");
    clearButton.addEventListener("click", clearCompletedTasks);
});

function addTask(text = null, done = false, id = null) {
    const taskInput = document.getElementById("taskInput");
    const taskText = text || taskInput.value.trim();

    if (taskText === "") return;

    const taskId = id || Date.now().toString(); 
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.dataset.id = taskId; 
    if (done) li.classList.add("done");

    const span = document.createElement("span");
    span.innerText = taskText;
   
    span.onclick = () => toggleDone(span);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("task-buttons");

    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.classList.add("edit-btn");
    editBtn.setAttribute("aria-label", "Editar esta tarefa");
    
    editBtn.onclick = () => editTask(editBtn); 

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "❌";
    removeBtn.setAttribute("aria-label", "Remover esta tarefa");
    
    removeBtn.onclick = () => removeTask(removeBtn); 

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(removeBtn);
    li.appendChild(span);
    li.appendChild(buttonsDiv);
    
    taskList.appendChild(li);

    if (text === null) {
        taskInput.value = "";
    }
    
    saveTasks();
    updateEmptyState();
}

function toggleDone(span) {
    const li = span.closest('li'); 
    li.classList.toggle("done");
    saveTasks();
}

function removeTask(button) {
    const li = button.closest('li');
    li.remove();
    saveTasks();
    updateEmptyState();
}

function saveTasks() {
    const taskList = document.querySelectorAll("#taskList li");
    const tasks = [];

    taskList.forEach(li => {
        const id = li.dataset.id;
        const taskText = li.querySelector("span").innerText;
        const done = li.classList.contains("done");
        
        tasks.push({ id: id, text: taskText, done: done });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(button) {
    const li = button.closest('li');
    const span = li.querySelector('span');

    span.contentEditable = true;
    span.focus(); 

    button.innerText = '✔️';
    button.classList.remove('edit-btn');
    button.classList.add('save-btn');
    
    
    button.onclick = () => saveEdit(button);
}

function saveEdit(button) {
    const li = button.closest('li');
    const span = li.querySelector('span');

    span.contentEditable = false;

    button.innerText = '✏️';
    button.classList.remove('save-btn');
    button.classList.add('edit-btn');

    
    button.onclick = () => editTask(button);

    saveTasks(); 
}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll("#taskList li.done");
    completedTasks.forEach(task => task.remove());
    saveTasks();
    updateEmptyState();
}

function updateEmptyState() {
    const emptyState = document.getElementById("empty-state");
    const tasks = document.querySelectorAll("#taskList li");

    if (tasks.length > 0) {
        emptyState.style.display = 'none';
    } else {
        emptyState.style.display = 'block';
    }
}