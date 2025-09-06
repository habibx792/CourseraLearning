const taskContainer = document.querySelector(".taskContainer");
const addTask = document.querySelector(".btnAddTask");

addTask.addEventListener("click", () => {
  let input = document.querySelector("#input");
  let inputValue = document.querySelector("#input").value.trim();
  if (inputValue === "") {
    alert("First add your task");
  } else {
    const btnDel = document.createElement("button");
    const h3 = document.createElement("h3");
    const btnEdit = document.createElement("button");
    const divcontain = document.createElement("div");
    divcontain.setAttribute("class", "taskDiv");
    h3.setAttribute("class", "TaskText");
    btnEdit.setAttribute("class", "btnEdit");
    btnDel.setAttribute("class", "btnDel");
    h3.innerText = inputValue;
    btnDel.innerText = "Delete";
    btnEdit.innerText = "Edit";
    divcontain.appendChild(h3);
    divcontain.appendChild(btnEdit);
    divcontain.appendChild(btnDel);
    taskContainer.appendChild(divcontain);
    console.log(inputValue);
    input.value = "";
  }
});
taskContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnDel")) {
    e.target.closest(".taskDiv").remove();
  }
  if (e.target.classList.contains("btnEdit")) {
    let change = prompt("Edit task");
    if (change !== null && change.trim() !== "") {
      const taskText = e.target.closest(".taskDiv").querySelector(".TaskText");
      taskText.innerText = change;
    }
  }
});

