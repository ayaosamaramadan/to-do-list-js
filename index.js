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

submitTask.addEventListener("click", () => {
  
});


