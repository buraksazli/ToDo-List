let job = document.getElementById("job");
let add_button = document.getElementById("submit");
let all_tasks = document.getElementById("tasks");

add_button.addEventListener("click" , addTask);
function addTask(e) {
    e.preventDefault();
    if (job.value === ''){
        alert('Enter Task First');
    } else {
        const new_task = document.createElement('div');
        const new_text = document.createTextNode(job.value);
        const button = document.createElement("BUTTON"); 
        new_task.classList += "border border-primary bg-primary text-white rounded p-2 mb-2"
        new_task.appendChild(new_text);
        all_tasks.appendChild(new_task);
        
        job.value="";
        

    }

}

