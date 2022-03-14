var taskIdCounter = 0;
//var buttonEl = document.querySelector("#save-task"); // adding the DOM object reference to the task list
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // task item DOM refernce

var taskFormHandler = function (event) { //placing code into a seperate function to hold a single responsibility
    event.preventDefault(); //prevents the browser from refreshing and carring out its default bahaviour
    var taskNameInput = document.querySelector("input[name='task-name']").value; //adding text to the list item - important when making dynmaic elements
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //checking if the input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset(); //reset is only used on form elements

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj){
    //create list iem
    var listItemEl = document.createElement("li"); // creating the DOM object element - important when making dynmaic elements
    listItemEl.className = "task-item"; // adding css styling using exisitng css - important when making dynmaic elements

    //add a task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl); //appending this elemnt to the task list - important when making dynmaic elements

    var taskActionEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    //increase task counter for nect unique id
    taskIdCounter++;
};

var createTaskActions = function(taskId){
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("seclect");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) { //i < statusChoices.length keeps the for loop running by checking the iterator against the number of items in the array.
        //create option elemnt
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i]; //returns the value of the array at the given index
        statusOptionEl.setAttribute("value", statusChoices[i]);
        
        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;
};

formEl.addEventListener("submit", taskFormHandler); //saying on a button click, create a task

