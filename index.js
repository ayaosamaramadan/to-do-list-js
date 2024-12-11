let openTask = document.getElementById("task-btn");
let addTask = document.getElementById("add-btn");
let submitTask = document.getElementById("submit");
let taskInput = document.getElementById("inputt");
let body = document.querySelector("body");
let tasks = [];

addTask.style.opacity = "0";
openTask.style.cssText = "visibility:visible";

openTask.addEventListener("click", () => {
  addTask.style.opacity = "1";
  openTask.style.cssText = "visibility:hidden";
});

let thetask = document.getElementById("thetask");

// add task
submitTask.addEventListener("click", () => {

  if (taskInput.value === "") {
    let notif = document.createElement("div");
    notif.setAttribute("class", "notif");
    let p = document.createElement("p");
    p.setAttribute("class", "notif-p");
    p.innerHTML = `<i class="fa-solid fa-x err"></i> Please enter a task`;
    notif.appendChild(p);
    console.log(notif);
    body.appendChild(notif);
    setInterval(() => {
      notif.remove();
    }, 2000);
    return;
  }

  let task = taskInput.value;
  tasks.push(task);
  thetask.innerHTML = "";
  tasks.forEach((task, ind) => {
    let div1 = document.createElement("div");
    let h44 = document.createElement("h4");
    let pp = document.createElement("p");
    let ineerdiv = document.createElement("div");
    ineerdiv.setAttribute("class", "task-actions");

    div1.setAttribute("class", `task`);

    h44.innerHTML = ind + 1;
    div1.appendChild(h44);

    pp.innerHTML = task;
    div1.appendChild(pp);

    for (let i = 0; i < 3; i++) {
      let btn = document.createElement("button");
      if (i === 0) {
        btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        btn.setAttribute("class", "complete-btn");
      }
      if (i === 1) {
        btn.innerHTML = `<i class="fa-solid fa-edit"></i>`;
        btn.setAttribute("class", "edit-btn");
      }
      if (i === 2) {
        btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        btn.setAttribute("class", "delete-btn");
      }
      ineerdiv.appendChild(btn);
    }
    div1.appendChild(ineerdiv);
    thetask.appendChild(div1);
  });
  taskInput.value = "";
  let notif = document.createElement("div");
  notif.setAttribute("class", "notif");
  let p = document.createElement("p");
  p.setAttribute("class", "notif-p");
  p.innerHTML = `<i class="fa-solid fa-check suc"></i> Task added successfully`;
  notif.appendChild(p);
  console.log(notif);
  body.appendChild(notif);
  setInterval(() => {
    notif.remove();
  }, 2000);
});
