const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

console.log(todoInput)
console.log(addButton)
console.log(todoList)
//local stroage 
const todos = localStorage.getItem("todoInput") ?
JSON.parse(localStorage.getItem("todoInput")): [];
console.log(todos)

// refreshView()
function refreshView() {
    let viewList = ''; 
    if (todos.length !== 0) {
        todos.forEach((todo, index) => {
            viewList += `<li class="name">${todo}</li>
          <button id='btns'onclick="clickFunction(${index})">Delete</button>
          <button id='btn2'onclick="clickEdit(${index})">Edit</button>`;
            todoList.innerHTML = viewList;
            console.log(todo)
        });
    }
    console.log("viewList",viewList)
}

refreshView();

// State management
addButton.addEventListener('click', () => {
    console.log('herreee')
    let todoText = todoInput.value;
    if (todoText){
        todos.push(todoText);
        refreshView();
    } else {
        alert('Enter the new todo');
      }  
    todoInput.value = '';  
    localStorage.setItem("todoInput", JSON.stringify(todos))
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

function clickFunction(clickindex) {
    todos.splice(clickindex, 1);
    console.log(todos)
    refreshView()
    localStorage.setItem("todoInput", JSON.stringify(todos))
    console.log(localStorage)  
};

refreshView();

function refreshView() {
    let viewList = ''; 
    if (todos.length !== 0) {
        todos.forEach((todo, index) => {
            viewList += `<li class="name">${todo}</li>
          <button id='btns'onclick="clickFunction(${index})">Delete</button>
          <button id='btn2'onclick="clickEdit(${index})">Edit</button>`;
            todoList.innerHTML = viewList;
            console.log(todo)
        });
    }
    console.log("viewList",viewList)
}

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
