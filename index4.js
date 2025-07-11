document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;


    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });


    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete';
    delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}
