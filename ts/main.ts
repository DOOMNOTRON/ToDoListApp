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
    addItem.onclick = process;
}

/**
 * Check form data is Valid
 */

function isValid():boolean{

}

/**
 * get all inout off the form
 * wrap in a ToDoItem object
 */
function getToDoItem(): ToDoItem{

}

/**
 * Display given ToDoItem on the web page
 */
function displayToDoItem(item: ToDoItem): void{

}

