//var buttonEl = document.querySelector("#save-task"); // adding the DOM object reference to the task list
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // task item DOM refernce

var createTaskHandler = function (event) { //placing code into a seperate function to hold a single responsibility
    event.preventDefault(); //prevents the browser from refreshing and carring out its default bahaviour
    var listItemEl = document.createElement("li"); // creating the DOM object element - important when making dynmaic elements
    listItemEl.className = "task-item"; // adding css styling using exisitng css - important when making dynmaic elements
    listItemEl.textContent = "This is a new task."; //adding text to the list item - important when making dynmaic elements
    tasksToDoEl.appendChild(listItemEl); //appending this elemnt to the task list - important when making dynmaic elements
};

formEl.addEventListener("submit", createTaskHandler); //saying on a button click, create a task

