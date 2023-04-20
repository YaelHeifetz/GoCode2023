const buildTodoList = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
  
      const todoList = document.createElement('ul');
      data.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.innerText = todo.title;
        if (todo.completed) {
          todoItem.style.textDecoration = 'line-through';
        }
        todoList.appendChild(todoItem);
      });
      document.body.appendChild(todoList);
    } catch (error) {
      console.error(error);
    }
  }
  
  buildTodoList();
  