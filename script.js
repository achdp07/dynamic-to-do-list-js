document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(event) {
        const taskText = taskInput.value.trim();
    
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        } else {
            const li = document.createElement('li');
            li.textContent = taskText;

            const RemoveBtn = document.createElement('button');
            RemoveBtn.textContent = 'Remove';
            RemoveBtn.className = 'Remove-btn';

            RemoveBtn.onclick = () => {
                taskList.removeChild(li);
            };

            li.appendChild(RemoveBtn);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    };

    addButton.addEventListener('click', addTask);
    });