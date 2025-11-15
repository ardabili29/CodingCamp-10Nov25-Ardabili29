// temporary storage for todo items

let todos = [];
    

// Function to add a new todo item

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    console.log("Input:", todoInput.value);
    console.log("Date:", todoDate.value);

    // Validate input
    if (todoInput.value === ''||todoDate.value === '') {
        alert("Please fill in both fields.");
    } else {
        // Add todo to the list
        todos.push({ text: todoInput.value, date: todoDate.value });
        todoInput.value = "";
        todoDate.value = "";

        renderTodos();

    }
}

// Function to render the todo item to the DOM
function renderTodos() {
    /// Get the todo list container
    const todoList = document.getElementById('todo-list');

    /// clear exiting list
    todoList.innerHTML = '';

    // render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

/// function to clear all todos items
function clearTodos() {
    todos = [];
    renderTodos();
}  

// function 2 alternativ, to clear all todos items Clears all todo items from the list and updates the DOM, status off

// function clearTodos() {
//     todos.length = 0;
//     renderTodos();
// }  

/// placeholder for future filter funcionality
/// maaf waktunya ga keburu nanti di update lagi
function filterTodos() { 
    alert("Filter functionality is not implemented yet."); 
}