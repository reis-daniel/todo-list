// Variablen
let userInput = document.querySelector(".userInput");
let userInputValue = document.querySelector(".userInput").value;
let addButton = document.querySelector(".addButton");
let listTodo = document.querySelector(".todoList");
let todo = document.createElement("li");
let checkbox = document.createElement("input");

// Wenn der userInput nicht leer ist und der Anwender auf Add klickt,
// sollte dieser als neues List-Item in der listTodo hinterlegt werden.

addButton.onclick = function addNewTodo() {
  todo.appendChild(document.createTextNode(userInputValue));
  todo.classList.add("list-group-item", "list-group-item-primary");
  listTodo.append(todo);
  userInput.value = "";
};
