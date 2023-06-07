const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

const todos = localStorage.getItem("todoInput") ?
JSON.parse(localStorage.getItem("todoInput")): [];
console.log(todos)

function refreshView() {
    let viewList = '';
    todos.forEach((todo, index) => {
        viewList += `<li>${todo}</li>
      <button onclick="clickFunction(${index})">Delete</button>
      <button onclick="clickEdit(${index})">Edit</button>`;
        todoList.innerHTML = viewList;
    });
}
// State management
addButton.addEventListener('click', () => {
    todos.push(todoInput.value);
    localStorage.setItem("todoInput", JSON.stringify(todos))
    refreshView()
    todoInput.value = '';  
});
const clickEdit = (todoindex) => {
    const text = prompt("Enter updated todo", todos[todoindex]);  
    console.log(text)
    if (text) {
        todos[todoindex] = text
        refreshView()
        localStorage.setItem("todoInput", JSON.stringify(todos))
    }   
}

function clickFunction(index) {
    todos.splice(index, 1);
    refreshView()
    console.log(todos)
    localStorage.setItem("todoInput", JSON.stringify(todos))
    console.log(localStorage)
    
};

// btnz.addEventListener("click", function () {
//     if (confirm("Do you want Delete this text?")) {
//     listId.removeChild(para)
//     }
//   })

// DOM MANIPULATION

// addButton.addEventListener('click',()=>{
//   const list = document.createElement('li');
//   const text = document.createTextNode(todoInput.value)
//   list.append(text);
//   todoLists.append(list)
// })
