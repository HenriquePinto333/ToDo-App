const form = document.getElementById('todoForm')
const input = document.getElementById('todoInput')
const todos = document.getElementById('todos')
const clearButton = document.getElementById('clearCompleted')

/*
  This will detect if any to-do is added to the list 
  and will also line-through a select to-do to be considered completed.
*/
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value;

    if(todo){
       const todoElement = document.
       createElement
       ('li');

       todoElement.innerText = todo;

       todoElement.addEventListener('click', (completedStatus) =>{
         //  todoElement.classList.toggle('completed');
         todos.removeChild(todoElement)
       });

       todos.appendChild(todoElement);

       input.value = "" ;
    }
});

/*
 This will clear every single to-do that is completed 
 so the screen becomes cleaner for the User to interact.
*/
clearButton.addEventListener('click', (clearbutton)=>{
        
    todos.forEach(element => {
        if(element.classList === 'completed'){
            todos.removeChild(element);
        }
    });  


});

