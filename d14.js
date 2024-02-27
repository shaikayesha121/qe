document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = document.getElementById('new-task').value;
    if (newTask === '') return;
    const taskList = document.getElementById('task-list');
    const newTaskElement = document.createElement('li');
    newTaskElement.classList.add('task-item');
    newTaskElement.innerHTML = `
        <input type="checkbox">
        <label>${newTask}</label>
        <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(newTaskElement);
    document.getElementById('new-task').value = '';
    newTaskElement.querySelector('input[type="checkbox"]').addEventListener('change', function() {
        newTaskElement.querySelector('label').toggleAttribute('class', 'completed-task');
    });
    newTaskElement.querySelector('.delete-button').addEventListener('click', function() {
        taskList.removeChild(newTaskElement);
    });
});