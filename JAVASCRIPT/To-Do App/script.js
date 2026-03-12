let todoList = [];
  // displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todoInput');
  let dateElement = document.querySelector('#todoDate');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector('.todoContainer');

  let newHtml = '';
  
  for (let i=0; i< todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btnDelete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
    `;
  }
  displayElement.innerHTML = newHtml;
}
