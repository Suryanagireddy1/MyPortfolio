window.onload = loadTasks;

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `${task} 
    <span>
      <button onclick="toggleComplete(this)">✔️</button>
      <button onclick="removeTask(this)">🗑️</button>
    </span>`;
  taskList.appendChild(li);

  saveTasks();
  taskInput.value = '';
}

function toggleComplete(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle('completed');
  saveTasks();
}

function removeTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = document.getElementById('taskList').innerHTML;
  localStorage.setItem('tasks', tasks);
}

function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    document.getElementById('taskList').innerHTML = saved;
  }
}
