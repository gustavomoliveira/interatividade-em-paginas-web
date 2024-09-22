/* 
No arquivo `index.html` crie um elemento “button” com texto “inserir” que, ao ser clicado,
chamará uma função que criará um elemento “h2” com texto “Titulo inserido” e o adicionará
ao elemento “div” de id “container”.
*/

function criar() {
    let div = document.getElementById('container');
    let h2 = document.createElement('h2');
    h2.textContent = 'Título inserido';
    div.appendChild(h2);
}