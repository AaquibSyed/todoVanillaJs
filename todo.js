function addTodo(event) {
  event.preventDefault();
  const input = document.querySelector("#inputTodo").value;
  const listMain = document.querySelector("#todo-list");
  const todoMain = document.createElement("div");
  todo.classList.add("todoMain");
  const listItem = document.createElement("li");
  listItem.innerText = input;
  todoMain.appendChild(listItem);
  listMain.appendChild(todoMain);
  document.querySelector("#inputTodo").value = "";
}

document.getElementById("btnAddTodo").addEventListener("click", addTodo);
