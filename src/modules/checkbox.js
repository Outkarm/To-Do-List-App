let toDoList = [];
const store = () => {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
};
const theCheck = (check) => {
  if (check.checked) {
    toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoList[check.id].completed = true;
    store();
  } else {
    toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoList[check.id].completed = false;
    store();
  }

  window.location.reload();
};

export { theCheck as default };
