document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(event) {
        const taskText = taskInput.value.trim();
    
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element and set its text

        classList.add;
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const RemoveBtn = document.createElement('button');
        RemoveBtn.textContent = "Remove";
        RemoveBtn.className = 'remove-btn';

        // Set up remove functionality
        RemoveBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to li, and li to task list
        li.appendChild(RemoveBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    };

    addButton.addEventListener('click', addTask);

    });