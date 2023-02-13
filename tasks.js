// select my Dom element
let myForm = document.querySelector(".form .task");
let addBtn = document.querySelector(".form .add");
let tasksList = document.querySelector(".tasks");
let id = 1;
if (window.localStorage.getItem("Task")) {
    createTask();
}

let arr = [];
// add the task in the local storage whene click in add task btn

addBtn.onclick = function () {
    if (myForm.value != "") {
        addTask();
        createTask();
    }
};

// add task in local storage function
function addTask() {
    let task = {
        id: generateId(),
        title: myForm.value,
    };
    function generateId() {
        return id++;
    }
    window.localStorage.setItem(`Task-${task.id}`, task.title);
}

// creat the task card
function createTask() {
    let li = document.createElement("li");
    let deletBtn = document.createElement("button");
    deletBtn.innerText = "Delete";
    deletBtn.onclick = function () {
        deletBtn.parentElement.remove();
    };
    li.innerText = window.localStorage.getItem("Task");
    li.append(deletBtn);
    tasksList.append(li);
}

// window.localStorage.clear();
