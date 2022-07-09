// Define global variables
const task = document.querySelector('#task')
const dueDate = document.querySelector('#due-date')
const submitTask = document.querySelector('#submit')
const todoList = document.querySelector('#todo-list')
const redAlert = document.querySelector('#red-alert')
const checkboxTick = document.querySelector('input[name="checkbox"]')
const completeTask = document.querySelector('#complete-task')
const deleteTask = document.querySelector('#delete')

console.log(task.value)

// Add the to-do list 
submitTask.addEventListener('click', function (e) {
  e.preventDefault()

  // Check if input value is empty
  emptyInput()

  // Check day
  checkDay()

  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type="checkbox" name="checkbox" id="checkbox"></td>
    <td>${task.value}</td>
    <td>${dueDate.value}</td>
    <td><a href="#" id="delete" class = "btn btn-danger btn-sm delete">X</a></td>`
  todoList.appendChild(row)

  // To add before delete when I sort you out
  // <td><a href="#" id="complete-task" class = "btn btn-success btn-sm d-none"><i class="fa fa-check" aria-hidden="true"></i></a></td>

  //Clear the form
  task.value = '';
  dueDate.value = '';
})

// Check if input value is empty and clear the form
function emptyInput() {
  if ((task.value === '') || (dueDate.value === '') || (dueDate.value === NaN)) {
    redAlert.classList.add('d-block')
    task.value = '';
    dueDate.value = ''

    setTimeout(() => {
      redAlert.classList.remove('d-block')
    }, 1000)
    row.innerHTML = ' ';

  }
}

// Delete todo list
function deleteList() {
  todoList.addEventListener('click', function (e) {
    if (e.target.id === 'delete' && e.target.parentNode.parentNode.remove()) {
      console.log(e.target)
    }
  })
}

deleteList()

// ====================================
// ====================================
// Check if task date has already passed function 
function checkDay() {
  const todayDate = new Date()
  if (dueDate.value < todayDate) {
    emptyInput()
  }
  // if (dueDate < new Date(new Date().getTime() - 24 * 60 * 60 * 1000)) {
  //   emptyInput()
  // }
  console.log(todayDate)
}


// Not working yet
// Show completed if checked
function addComplete() {
  todoList.addEventListener('click', function (e) {
    if (e.target.id === 'checked') {
      console.log(e)
      if (todoList.childNodes.id === 'complete') {
        todoList.childNodes.classList.add('d-block')
      }
    }
    // completeTask.classList.add('d-block')
  })
}

addComplete()
