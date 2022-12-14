/* eslint-disable no-loop-func */
import "./style.css";
import theCheck from "./modules/checkbox.js";

let toDoList = [];

class CreateTask {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}
const pushTask = () => {
  toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  const taskValue = document.querySelector("#entry").value;
  const id = toDoList.length;
  const completed = false;
  const theTask = new CreateTask(taskValue, completed, id);
  if (taskValue !== "") {
    toDoList.push(theTask);
  }
};

const store = () => {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
};

const container = document.querySelector("#sub-container");
const createTask = () => {
  toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  for (let x = 0; x < toDoList.length; x += 1) {
    const task = document.createElement("div");
    const taskC = document.createElement("div");
    task.classList.add("task");
    taskC.append(task);
    container.append(taskC);
    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("check-box");
    check.id = toDoList[x].id;
    check.addEventListener("click", () => {
      theCheck(check);
    });
    task.append(check);
    const theTask = document.createElement("p");
    theTask.innerText = toDoList[x].description;
    theTask.classList.add("text");
    if (toDoList[x].completed === true) {
      theTask.classList.add("cancel");
      check.checked = true;
    } else if (theTask.classList.contains("cancel")) {
      theTask.classList.remove("cancel");
      check.checked = false;
    }
    task.append(theTask);
    const taskOptBtn = document.createElement("button");
    taskOptBtn.classList.add("task-opt-btn");
    const opt = document.createElement("i");
    opt.classList.add("removeBtn");
    opt.id = "moreicon";
    opt.classList.add("fa-solid");
    opt.classList.add("fa-ellipsis-vertical");
    taskOptBtn.append(opt);
    task.append(taskOptBtn);
    opt.id = toDoList[x].id;
    const editTask = document.createElement("i");
    editTask.classList.add("fa-solid");
    editTask.classList.add("fa-pen-to-square");
    editTask.classList.add("vanish");
    task.append(editTask);
    const remove = document.createElement("i");
    remove.classList.add("fa-solid");
    remove.classList.add("fa-trash-can");
    remove.classList.add("vanish");
    task.append(remove);
    taskOptBtn.addEventListener("click", () => {
      opt.classList.add("vanish");
      editTask.classList.remove("vanish");
      remove.classList.remove("vanish");
      editTask.addEventListener("click", () => {
        const editContainer = document.createElement("div");
        editContainer.classList.add("edit-sec");
        const editAreaCbtn = document.createElement("button");
        editAreaCbtn.classList.add("checkbtn");
        const eCCancel = document.createElement("i");
        eCCancel.classList.add("fa-solid");
        eCCancel.classList.add("fa-xmark");
        editAreaCbtn.append(eCCancel);
        editContainer.append(editAreaCbtn);

        editAreaCbtn.addEventListener("click", () => {
          if (taskC.contains(editContainer) === true) {
            editContainer.remove();
          }
          opt.classList.remove("vanish");
          editTask.classList.add("vanish");
          remove.classList.add("vanish");
          window.location.reload();
        });

        const editArea = document.createElement("input");
        editArea.value = toDoList[x].description;
        editArea.classList.add("type-sec");
        editContainer.append(editArea);
        const editAreabtn = document.createElement("button");
        editAreabtn.classList.add("checkbtn");
        editContainer.append(editAreabtn);
        const editEnter = document.createElement("i");
        editEnter.classList.add("fa-sharp");
        editEnter.classList.add("fa-solid");
        editEnter.classList.add("fa-circle-check");
        editAreabtn.append(editEnter);

        editAreabtn.addEventListener("click", () => {
          theTask.innerText = editArea.value;
          toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
          toDoList[x].description = editArea.value;

          if (taskC.contains(editContainer) === true) {
            editContainer.remove();
          }
          opt.classList.remove("vanish");
          editTask.classList.add("vanish");
          remove.classList.add("vanish");
          store();
          window.location.reload();
        });
        taskC.append(editContainer);
      });
      remove.id = toDoList[x].id;
      const removeTask = () => {
        const target = remove.id;
        toDoList.splice(target, 1);

        let newId = 0;
        if (toDoList.length > 0) {
          toDoList.forEach((m) => {
            m.id = newId;
            newId += 1;
          });
        }
      };

      remove.addEventListener("click", () => {
        toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
        removeTask();
        store();

        window.location.reload();
      });
    });
  }
};

const enterTask = document.querySelector(".enter");
enterTask.addEventListener("click", () => {
  pushTask();
  store();
  toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  window.location.reload();
});

const clearAll = document.querySelector(".clear-all");
clearAll.addEventListener("click", () => {
  toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  toDoList = toDoList.filter((e) => e.completed === false);
  let newId = 0;
  if (toDoList.length > 0) {
    toDoList.forEach((m) => {
      m.id = newId;
      newId += 1;
    });
  }
  store();
  toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  window.location.reload();
});

createTask();
