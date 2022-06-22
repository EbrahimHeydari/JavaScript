const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Save Tasks
let tasks
const checkIsTasks = () => {
  if (localStorage.getItem('tasks') === null)
    tasks = []
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
}
checkIsTasks()


const createTask = taskValue => {
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.innerHTML = taskValue

  li.innerHTML += `<a href='#' class='secondary-content'>❌</a>`
  taskList.appendChild(li)
}

const storeTaskToLocalStorage = task => {
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const getTasksFromLocalStorage = () => tasks.forEach(task => createTask(task))

const removeTaskFromLocalStorage = taskItem => {
  tasks.forEach((task, index) => {
    if (taskItem.firstChild.textContent === task)
      tasks.splice(index, 1)
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = event => {
  event.preventDefault()

  createTask(taskInput.value)

  storeTaskToLocalStorage(taskInput.value)

  taskInput.value = ''
}

const removeTask = event => {
  if (event.target.classList.contains('secondary-content'))
    if (confirm(`Are you sure to remove ${event.target.parentElement.firstChild.textContent}?`))
      event.target.parentElement.remove()

  removeTaskFromLocalStorage(event.target.parentElement)
}

const clearTasks = () => {
  // Shorter
  // taskList.innerHTML = ''

  // Faster
  while (taskList.firstChild)
    taskList.removeChild(taskList.firstChild)

  localStorage.clear()
}

const filterTasks = event => {
  const text = event.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.textContent

    if (item.toLowerCase().indexOf(text) != -1)
      task.style.display = 'block'
    else
      task.style.display = 'none'
  })
}


const loadEventListeners = () => {
  // Load DOM
  document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage)
  // Add Task
  form.addEventListener('submit', addTask)
  // Remove Task
  taskList.addEventListener('click', removeTask)
  // clear Tasks
  clearBtn.addEventListener('click', clearTasks)
  // Filter Tasks
  filter.addEventListener('keyup', filterTasks)
}

loadEventListeners()