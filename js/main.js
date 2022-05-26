var picker = datepicker("#due-date");
picker.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = document.getElementById("add");
    addItem.onclick = process;
};
function isValid() {
}
function getToDoItem() {
}
function displayToDoItem(item) {
}
