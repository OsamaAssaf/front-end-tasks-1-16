let addButton = document.getElementById('add-btn');

addButton.addEventListener('click',addTask);

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        addTask();
    }
});

function addTask(){
    let taskInput = document.getElementById('input-task');
    let tasksList = document.getElementById('tasks-list');

    if(taskInput.value === ''){
        document.getElementById('error').style.display = 'block';
        return;
    }
    document.getElementById('error').style.display = 'none';
    tasksList.appendChild(buildTask(taskInput.value));
    taskInput.value = '';
}

function buildTask(value){
    let taskListItem = document.createElement('li');
    taskListItem.setAttribute('class','task');

    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    let taskValue = document.createElement('p');
    taskValue.textContent = value;
    label.appendChild(checkbox);
    label.appendChild(taskValue);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','delete-btn');
    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class','fa fa-trash-o');
    deleteButton.appendChild(deleteIcon);

    taskListItem.appendChild(label);
    taskListItem.appendChild(deleteButton);

    checkbox.addEventListener('click',() => {
        console.log(checkbox.checked);
    });

    deleteButton.addEventListener('click',()=>{
        taskListItem.remove();
    });

    return taskListItem;
}


