let openTask = document.getElementById("task-btn");
let addTask = document.getElementById("add-btn");

addTask.style.opacity = "0";

openTask.addEventListener("click", () => {
    addTask.style.opacity = "1";
    openTask.style.opacity = "0";
});

