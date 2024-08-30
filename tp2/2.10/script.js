/* 
Exercício 10 Adicionando dinamicamente I
    No arquivo `script.js`, crie um elemento `<button>` com texto `inserir`, que ao ser `clicado`:
        Crie um elemento `<h2>` com texto `Inserido`; 
        Adicione o elemento `<h2>`como filho do elemento `<div” id=“container”>` que está no HTML.
        Obs.:
            Não faça as alterações `manualmente` no arquivo `index.html`; 
            Utilize o `DOM` para resolver o exercício;
            Utilize `Append` para resolver o exercício.
*/
let container = document.getElementById('container');
let botao = document.createElement('button');
botao.textContent = 'Inserir';
document.body.appendChild(botao);

botao.addEventListener('click', function() {
    let titulo = document.createElement('h2');
    titulo.textContent = 'Inserido';
    container.appendChild(titulo);
});