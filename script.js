let job = document.getElementById("job");
let add_button = document.getElementById("submit");
let all_tasks = document.getElementById("tasks");

add_button.addEventListener("click" , addTask);
document.addEventListener("DOMContentLoaded", listTasks);

function addTask(e) {
    e.preventDefault();
    if (job.value === ''){
        alert('Enter Task First');
    } else {    
        storeTasks(job.value);
        createNode(job.value);
        job.value="";
    }
}

function deleteTask() {
    
        
}

function storeTasks(job) {
    let stored_tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    stored_tasks.push(job);
    localStorage.setItem("tasks" , JSON.stringify(stored_tasks));
}

function listTasks() {
    const all_stored_tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    all_stored_tasks.forEach(function (task) {
        createNode(task);
    } );
}

function createNode(job) {
    const new_task = document.createElement('div');
    const new_text = document.createTextNode(job);
    const new_button = document.createElement("button"); 
    const new_icon = document.createElement("i");
    
    new_icon.classList += "fa-solid fa-trash fa-xs";
    new_task.classList += "border border-primary bg-primary text-white rounded p-2 mb-2 d-flex justify-content-between";
    new_button.classList += "btn btn-danger";
        
    new_task.appendChild(new_text); 
    new_button.appendChild(new_icon);
    new_task.appendChild(new_button);
    all_tasks.appendChild(new_task);     
}    



