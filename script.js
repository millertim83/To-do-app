document.getElementById('form')
    .addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    if (todoText === '') return;
    displayTodo(todoText);
});



function displayTodo(todoText) {
    const todoListItem = document.createElement('li');
    const deleteButton = createDeleteButton(todoListItem);
    const todoCheckbox = createTodoCheckbox(todoListItem);
    
    todoListItem.textContent = todoText;
    todoListItem.appendChild(todoCheckbox);
    todoListItem.appendChild(deleteButton);

    document.getElementById("To-Do-List").appendChild(todoListItem);
    
    document.getElementById('form').reset();
}
    
 function createDeleteButton(todoListItem)   {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", () => {
        todoListItem.remove();
    });
    return deleteButton;
 }

 function createTodoCheckbox(todoListItem) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
        todoListItem.classList.toggle('done');
    });
    return checkbox;
 }
    




document.querySelector('#clear-list')
    .addEventListener('click', (e) => {
        const toDoList = document.querySelector('#To-Do-List');
        while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
});


