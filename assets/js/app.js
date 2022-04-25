let addButton = document.querySelector(".addButton");

addButton.onclick = function addNewTodo() {
  let userInput = document.querySelector(".userInput");
  let listTodo = document.querySelector(".todoList");
  let todo = document.createElement("li");
  let checkbox = document.createElement("input");

  if (userInput.value) {
    todo.appendChild(checkbox);
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "me-1");

    todo.appendChild(document.createTextNode(userInput.value));
    todo.classList.add("list-group-item", "list-group-item-primary");
    listTodo.append(todo);

    userInput.value = "";
  } else {
    window.alert("Bitte Todo eingeben!");
  }
};
