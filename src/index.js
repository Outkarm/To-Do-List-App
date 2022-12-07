import './style.css';

const toDoList = [
  {
    description: 'work with saba',
    completed: true,
    index: 0,
  },
  {
    description: 'work at the office',
    completed: false,
    index: 1,
  },
];

const container = document.querySelector('#sub-container');

for (let x = 0; x < toDoList.length; x += 1) {
  const task = document.createElement('div');
  task.classList.add('task');
  container.append(task);
  const check = document.createElement('input');
  check.type = 'checkbox';
  task.append(check);
  const theTask = document.createElement('p');
  theTask.innerText = toDoList[x].description;
  theTask.classList.add('text');
  task.append(theTask);
  const remove = document.createElement('i');
  remove.classList.add('removeBtn');
  remove.id = 'moreicon';
  remove.classList.add('fa-solid');
  remove.classList.add('fa-ellipsis-vertical');
  task.append(remove);
}
