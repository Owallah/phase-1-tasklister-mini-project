document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTodo(e.target.new_task_description.value)
    form.reset()
  })
});

function buildTodo(task) {
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  list.textContent = `${task} `
  list.appendChild(btn)
  document.querySelector('#tasks').appendChild(list)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
