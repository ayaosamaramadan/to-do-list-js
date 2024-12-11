let openTask = document.getElementById("task-btn");
let addTask = document.getElementById("add-btn");

addTask.style.opacity = "0";

openTask.addEventListener("click", () => {
  if (addTask.style.opacity === "0") {
    addTask.style.opacity = "1";
  } else {
    addTask.style.opacity = "0";
  }
});

