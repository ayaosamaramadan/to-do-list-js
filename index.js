let openTask = document.getElementById("task-btn");
let addTask = document.getElementById("add-btn");
let taskInput = document.getElementById("inputt");
let body = document.querySelector("body");
let thetask = document.getElementById("thetask");
let taskss = document.getElementById("taskss");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
let b = document.getElementById("b");
let inputt = document.getElementById("inputt");

let addbtn = document.createElement("button");
addbtn.setAttribute("id", "submit");
addbtn.innerHTML = `<i class="fa-solid fa-add"></i>`;
b.appendChild(addbtn);
let addsubmitTask = document.getElementById("submit");
let currentEditIndex = null;
taskss.style.opacity = "0";
taskss.style.cssText = "visibility:hidden";

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
addsubmitTask.addEventListener("click", () => {
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
  completedTasks.push(false);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
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

let complete;
// update task
function updatee() {
  thetask.innerHTML = "";
  tasks.forEach((task, ind) => {
    let div1 = document.createElement("div");
    // div1.classList.add("add");
    let h44 = document.createElement("h4");
    h44.setAttribute("class", "task-number");
    let pp = document.createElement("p");
    pp.setAttribute("class", `task-text ${ind}`);
    let ineerdiv = document.createElement("div");
    ineerdiv.setAttribute("class", "task-actions");
    div1.setAttribute("class", `task`);
    div1.setAttribute("id", `${ind}`);
    complete=document.getElementById(`${ind}`);
    h44.innerHTML = ind + 1;
    div1.appendChild(h44);
    pp.innerHTML = task;
    current = pp.innerHTML;
    div1.appendChild(pp);
    for (let i = 0; i < 3; i++) {
      let delbtn = document.createElement("button");
      let editbtn = document.createElement("button");
      let compbtn = document.createElement("button");
      if (i === 0) {
        compbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        compbtn.setAttribute("class", `complete-btn`);
        if (completedTasks[ind]) {
          div1.style.backgroundColor = "#4dff6b65";
          compbtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
          compbtn.setAttribute("class", `cancle-completebtn`);
        }
        compbtn.addEventListener("click", () => {
          if(compbtn.innerHTML === `<i class="fa-solid fa-check"></i>`){
          div1.style.backgroundColor = "#4dff6b65";
          compbtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
          compbtn.setAttribute("class", `cancle-completebtn`);
          completedTasks[ind] = true;
          }else{
            div1.style.backgroundColor = "#fff";
            compbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
            compbtn.setAttribute("class", `complete-btn`);
            completedTasks[ind] = false;
          }
          localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        });
        ineerdiv.appendChild(compbtn);
      }
      if (i === 1) {
        editbtn.innerHTML = `<i class="fa-solid fa-edit"></i>`;
        editbtn.setAttribute("class", `edit-btn`);
        editbtn.addEventListener("click", () => editask(ind));
        ineerdiv.appendChild(editbtn);
      }
      if (i === 2) {
        delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        delbtn.setAttribute("class", `delete-btn `);
        delbtn.addEventListener("click", () => deletetask(ind, div1));
        ineerdiv.appendChild(delbtn);
      }
    }
    div1.appendChild(ineerdiv);
    
    thetask.appendChild(div1);

    opacit();
    
  });
}

function opacit() {
  if (tasks.length > 0) {
    taskss.style.opacity = "1";
    taskss.style.cssText = "visibility:visible";
  } else {
    taskss.style.opacity = "0";
    taskss.style.cssText = "visibility:hidden";
  }
}

// delete task
function deletetask(ind, taskElement) {
  // animation
  taskElement.classList.add("remove");
  setTimeout(() => {
  tasks.splice(ind, 1);
  completedTasks.splice(ind, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
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
}, 300);
  opacit();
}

let editbtn = document.createElement("button");
editbtn.setAttribute("id", "submitt");


function editask(ind) {
  taskInput.value = tasks[ind];
  currentEditIndex = ind;
  console.log(current);
  editbtn.innerHTML = `<i class="fa-solid fa-edit"></i>`;
  b.replaceChild(editbtn, addbtn);

  addTask.style.opacity = "1";
  openTask.style.cssText = "visibility:hidden";
}


editbtn.addEventListener("click", () => {
  let task = taskInput.value;
  tasks[currentEditIndex] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    updatee();
    taskInput.value = "";
    b.replaceChild(addbtn, editbtn);
    currentEditIndex = null;
    //edit task notification
    let notif = document.createElement("div");
    notif.setAttribute("class", "notif");
    let p = document.createElement("p");
    p.setAttribute("class", "notif-p");
    p.innerHTML = `<i class="fa-solid fa-check suc"></i> Task edited successfully`;
    notif.appendChild(p);
    body.appendChild(notif);
    setTimeout(() => {
      notif.remove();
    }, 2000);
  
});


