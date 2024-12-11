let openTask = document.getElementById("task-btn");
let addTask = document.getElementById("add-btn");
let submitTask = document.getElementById("submit");
let taskInput = document.getElementById("inputt");

let tasks = [];

addTask.style.opacity = "0";
openTask.style.cssText = "visibility:visible";

openTask.addEventListener("click", () => {
    addTask.style.opacity = "1";
    openTask.style.cssText = "visibility:hidden";
});

let thetask = document.getElementById("thetask");

submitTask.addEventListener("click", () => {
    let task = taskInput.value;
    tasks.push(task);
    thetask.innerHTML = "";
    tasks.forEach((task , ind) => {
      let div1 = document.createElement("div");
      let h33 = document.createElement("h3");
      let pp = document.createElement("p");
      let ineerdiv = document.createElement("div");
      ineerdiv.setAttribute("class", "task-actions");

      div1.setAttribute("class", `task`);

      h33.innerHTML = ind + 1;
      div1.appendChild(h33);

      pp.innerHTML = task;
      div1.appendChild(pp);

      for (let i = 0; i < 3; i++) {
        let btn = document.createElement("button");
        if(i === 0){
          btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
          btn.setAttribute("class", "complete-btn");
        }
        if(i === 1){
          btn.innerHTML = `<i class="fa-solid fa-edit"></i>`;
          btn.setAttribute("class", "edit-btn");
        }
        if(i === 2){
          btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
          btn.setAttribute("class", "delete-btn");
        }
        ineerdiv.appendChild(btn);
      }
      div1.appendChild(ineerdiv);
      thetask.appendChild(div1);
    });
    taskInput.value = "";
    });




