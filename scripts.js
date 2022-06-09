/* Counter App v1.0*/
const appCounterJS = document.querySelector('#app__counter-js');
const buttonMinus = appCounterJS.querySelector('.btn.btn--minus');
const buttonPlus = appCounterJS.querySelector('.btn.btn--plus');
const counter = appCounterJS.querySelector('[data-counter]');

buttonMinus.addEventListener('click', function(e) {
  e.preventDefault();
  let newValue = parseInt(counter.dataset.value) - 1;
  counter.dataset.value = newValue;
  counter.innerHTML = newValue;
})
buttonPlus.addEventListener('click', function(e) {
  e.preventDefault();
  let newValue = parseInt(counter.dataset.value) + 1;
  counter.dataset.value = newValue;
  counter.innerHTML = newValue;
})

/* Counter App v2.0*/
const appCounterJS_v2 = {
  buttonMinus: document.querySelector('#app__counter2-js .btn.btn--minus'),
  buttonPlus: document.querySelector('#app__counter2-js .btn.btn--plus'),
  counter: document.querySelector('#app__counter2-js [data-counter]'),
  count: 0,
  decrease: function(){
    this.count = this.count - 1
    this.counter.innerHTML = this.count
  },
  increase: function(){
    this.count = this.count + 1
    this.counter.innerHTML = this.count
  }
}

/* Todo List App */
const todoAppJS = document.querySelector('#app__todo-js'); 
const todoList = todoAppJS.querySelector('.todo-list');
const todoItems = [ 
  {title:"Item 1", editable:false},
  {title:"Item 2", editable:false}
];

const addButton = todoAppJS.querySelector('.input__container button');

window.addEventListener('load', (e) => {
  renderTodoItems();
  setupButtonListeners();
});

addButton.addEventListener('click', function(e){
  // Get new item from input
  let inputValue = todoAppJS.querySelector('.input__container input').value;
  if (inputValue != '') {
    let item = {
      title: inputValue,
      editable: false
    }
    todoItems.push(item);
    renderTodoItems();
    setupButtonListeners();
    todoAppJS.querySelector('.input__container input').value = ""
    todoAppJS.querySelector('.input__container input').focus();
  }
})

const renderTodoItems = () => {
  let listItems = "";
  todoItems.forEach( function(item,index){
    listItems += `
    <div class="list-item">
      <div class="list-item__details" contentEditable="false" data-index="${index}">${item.title}</div>
        <div class="list-item__controls">
          <button class="btn btn--edit" data-index="${index}">Edit</button>
          <button class="btn btn--save" data-index="${index}">Save</button>
          <button class="btn btn--remove" data-index="${index}">Remove</button>
        </div>
      </div>
    </div>`
  });
  todoList.innerHTML = listItems;
}

const setupButtonListeners = () => {
  let editButtons = todoAppJS.querySelectorAll('.btn--edit')
  editButtons.forEach(function(button) {
    button.addEventListener('click',function(e){
      let index = parseInt(e.currentTarget.dataset.index);
      let selector = `.list-item__details[data-index="${index}"]`;
      let item = todoAppJS.querySelector(selector);
      item.contentEditable = true;
    })
  })
  let saveButtons = todoAppJS.querySelectorAll('.btn--save');
  saveButtons.forEach(function(button) {
    button.addEventListener('click',function(e){
      let index = parseInt(e.currentTarget.dataset.index);
      let selector = `.list-item__details[data-index="${index}"]`;
      let item = todoAppJS.querySelector(selector);
      item.contentEditable = false;
    })
  })
  let removeButtons = todoAppJS.querySelectorAll('.btn--remove');
  removeButtons.forEach(function(button) {
    button.addEventListener('click',function(e){
      console.log(e.currentTarget)
      let index = parseInt(e.currentTarget.dataset.index);
      console.log(index)
      todoItems.splice(index,1);
      renderTodoItems();
      setupButtonListeners();
      console.log(todoItems)
    })
  })
}