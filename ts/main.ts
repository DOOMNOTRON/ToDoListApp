// @ts-ignore: lack of intellisense
const picker = datepicker("#due-date");
picker.setMin(new Date()) // todays date as minimum

class ToDoItem{
    title: string;
    dueDate: Date;
    isCompleted: boolean;

}

/*
let item = new ToDoItem();
item.title = "Testing";
item.dueDate = new Date();
item.isCompleted = false;
*/

window.onload = function(){
    let addItem = document.getElementById("add");
    addItem.onclick = main;  

    // Load saved Item
    loadSavedItem();
}

function loadSavedItem(){
    let item = getToDo(); //red from strorage
    displayToDoItem(item);
}


function main(){
    if (isValid()){
        let item = getToDoItem();
        displayToDoItem(item);
        savedToDo(item);
    }
}
/**
 * Check form data is Valid
 */

function isValid():boolean{
    return true;
}

/**
 * get all inout off the form
 * wrap in a ToDoItem object
 */
function getToDoItem(): ToDoItem{
    let myItem = new ToDoItem();

    //get title
    let titleInput = getInput("title");
    myItem.title = titleInput.value;

    // get due date
    let dueDateInput = getInput("due-date");
    myItem.dueDate = new Date(dueDateInput.value)

    // get isCompleted
    let isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

/**
 * Display given ToDoItem on the web page
 */
function displayToDoItem(item: ToDoItem): void{
    // create <h3> with title
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    // create <p> with due date
    let itemDate = document. createElement("p");
    //itemDate.innerText = item.dueDate.toDateString();// makes it shorter or you get timezone
    let dueDate = new Date(item.dueDate.toString());
    itemDate.innerText = dueDate.toDateString();

    // creates <div> class "completed" or <div> class "todo"
    let itemDiv = document.createElement("div");

    //create on click for div
    itemDiv.onclick = markAsComplete;

    itemDiv.classList.add("todo");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }

    // puts them in the div because they are children of the div
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.isCompleted){
        let completedToDOs = document.getElementById("complete-items");
        completedToDOs.appendChild(itemDiv);
        
    }
    else{
        let incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv);
    }

}

function markAsComplete(){
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");

    let completedItems = document.getElementById("complete-items");
    completedItems.appendChild(itemDiv);
}

const todokey = "todo";

/**
 * get todo item or return
 * null if none is found.
 */
function savedToDo(item:ToDoItem):void{
    let itemString = JSON.stringify(item);

    localStorage.setItem(todokey, itemString)
}


function getToDo():ToDoItem{
    let itemString = localStorage.getItem(todokey);
    let item: ToDoItem = JSON.parse(itemString);
    return item;

}