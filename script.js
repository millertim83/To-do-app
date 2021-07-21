const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('event type: ', e);
    renderToDoList();
});



function renderToDoList() {
    const node = document.createElement('li');
    const addToDo = document.getElementById('todo-input');
    const toDoText = addToDo.value;
    node.textContent = toDoText;
    
    //Mark task complete with checkbox
    const markTaskComplete = document.createElement('input');
    markTaskComplete.type = 'checkbox';
    node.appendChild(markTaskComplete);
    markTaskComplete.addEventListener('click', (e) => {
        const toDoListItem = e.target.parentElement;
        if (markTaskComplete.checked) {
        toDoListItem.style.textDecoration = "line-through";
        console.log('Task completed');  
        } else toDoListItem.style.textDecoration = "none";
    })
    
    document.getElementById("To-Do-List").appendChild(node);
    console.log(toDoText);
    
    //Reset form after user enters item to list
    form.addEventListener('submit', (e) => {
        document.getElementById('form').reset();
    });
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X"
    node.appendChild(deleteButton);
    deleteButton.addEventListener("click", (e) => {
        node.remove();
        console.log('List item removed');
    });

    //clear list
    const clearList = document.querySelector('#clear-list');
    clearList.addEventListener("click", (e) => {
        while (toDoList.firstChild) {
            toDoList.removeChild(toDoList.firstChild);
        }
        console.log('List has been cleared');
    });

}

