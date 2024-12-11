let openTask = document.getElementById("task-btn");
let addTask = document.getElementById("add-btn");
let submitTask = document.getElementById("submit");
let taskInput = document.getElementById("inputt");
let body = document.querySelector("body");
let thetask = document.getElementById("thetask");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addTask.style.opacity = "0";
openTask.style.cssText = "visibility:visible";

openTask.addEventListener("click", () => {
  addTask.style.opacity = "1";
  openTask.style.cssText = "visibility:hidden";
});

document.addEventListener("DOMContentLoaded", () => {
  updatee();
});

// add task
submitTask.addEventListener("click", () => {
  //error in add task notification
  if (taskInput.value === "") {
    let notif = document.createElement("div");
    notif.setAttribute("class", "notif");
    let p = document.createElement("p");
    p.setAttribute("class", "notif-p");
    p.innerHTML = `<i class="fa-solid fa-x err"></i> Please enter a task`;
    notif.appendChild(p);
    body.appendChild(notif);
    setInterval(() => {
      notif.remove();
    }, 2000);
    return;
  }
  let task = taskInput.value;
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updatee();
  taskInput.value = "";
  //add task notification
  let notif = document.createElement("div");
  notif.setAttribute("class", "notif");
  let p = document.createElement("p");
  p.setAttribute("class", "notif-p");
  p.innerHTML = `<i class="fa-solid fa-check suc"></i> Task added successfully`;
  notif.appendChild(p);
  body.appendChild(notif);
  setInterval(() => {
    notif.remove();
  }, 2000);
});

// update task
function updatee() {
  thetask.innerHTML = "";
  tasks.forEach((task, ind) => {
    let div1 = document.createElement("div");
    let h44 = document.createElement("h4");
    let pp = document.createElement("p");
    let ineerdiv = document.createElement("div");
    ineerdiv.setAttribute("class", "task-actions");
    div1.setAttribute("class", `task`);
    div1.setAttribute("id", `${ind}`);
    h44.innerHTML = ind + 1;
    div1.appendChild(h44);
    pp.innerHTML = task;
    div1.appendChild(pp);
    for (let i = 0; i < 3; i++) {
      let delbtn = document.createElement("button");
      let editbtn = document.createElement("button");
      let compbtn = document.createElement("button");
      if (i === 0) {
        compbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        compbtn.setAttribute("class", `complete-btn`);
        ineerdiv.appendChild(compbtn);
      }
      if (i === 1) {
        editbtn.innerHTML = `<i class="fa-solid fa-edit"></i>`;
        editbtn.setAttribute("class", `edit-btn`);
        ineerdiv.appendChild(editbtn);
      }
      if (i === 2) {
        delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        delbtn.setAttribute("class", `delete-btn `);
        delbtn.addEventListener("click", () => deletetask(ind));
        ineerdiv.appendChild(delbtn);
      }
    }
    div1.appendChild(ineerdiv);
    thetask.appendChild(div1);
  });
}

// delete task
function deletetask(ind) {
  tasks.splice(ind, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updatee();
  //delete task notification
  let notif = document.createElement("div");
  notif.setAttribute("class", "notif");
  let p = document.createElement("p");
  p.setAttribute("class", "notif-p");
  p.innerHTML = `<i class="fa-solid fa-check suc"></i> Task deleted successfully`;
  notif.appendChild(p);
  body.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 2000);
}
