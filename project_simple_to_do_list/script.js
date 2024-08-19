const list = document.getElementById('list');
const form = document.forms.addTask;

form.addEventListener('submit',addTask);

function addTask(e){
    e.preventDefault(); //remove o comportamento padrão de enviar para o servidor;
    const task = document.createElement('li');
    task.textContent = form.newTask.value;
    list.appendChild(task);
    form.newTask.value = ''; //solution 1;
    form.newTask.focus(); //solution 1;
}

list.addEventListener('click', remove);

function remove(e) { //solution 2;
    e.target.remove();
}

/* function strikeTask(e){
    e.target.classList.toggle('complete');
} */

/* 
1. Can you update the simple to-do list code so that the add function clears
the input box and gives it focus after an item has been added, instead of
the text just remaining there? (Hint: you might want to look up the focus()
method that form elements have.)
*/

/* 
2. Instead of crossing out the items in the simple to-do list, can you change the
functionality so that it removes the items when they’re clicked on?
(Hint: you could use the remove() method that we covered in the last chapter.)
*/

