const form = document.forms.myForm;
const hello = document.getElementById('hello');
form.addEventListener('submit',sayHello);

function sayHello(e){
    e.preventDefault();//método que previne o comportamento basico de um elemento de ser executado.
    hello.textContent = `Hello ${form.myName.value}!`;
  }

