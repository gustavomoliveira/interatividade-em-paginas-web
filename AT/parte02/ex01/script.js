/* 
Crie no arquivo `index.html` um elemento `h1` contendo o texto “Título” e um elemento `div` de id=”card”. Após isso:
Ao clicar no elemento “div”, adicione uma classe “card” à esta “div”.
Ao clicar no “h1”, faça com que a classe “corVermelha” seja adicionada/removida alternadamente cada vez que clicar no “h1”.
*/

//OBS: Classes criadas no CSS com valores genéricos para facilitar visualização do exercício

let h1 = document.querySelector('h1');
let div = document.getElementById('card');

div.addEventListener('click', () => {
    div.classList.add('card');
});

h1.addEventListener('click', () => {
    h1.classList.toggle('corVermelha');
});