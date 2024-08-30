/* 
Exercício 12 Grupo - Adicionando itens
    No arquivo script.js, siga as etapas abaixo:
        Crie um elemento `<button>` com texto `inserir` e com uma função de click.
        Adicione o botão como filho do body através do `append`.
        Ao clicar no `<button>`:
            Crie um elemento `<li>` com texto `nova entrada`.
            Adicione o elemento `<li>` criado como filho do elemento `<ul>` de id “lista”.
        Obs:
            Não faça as alterações `manualmente` no arquivo `index.html`.
            Utilize o DOM para resolver o exercício.
*/

let listaDesordenada = document.getElementById('lista');
let elementButton = document.createElement('button');
elementButton.textContent = 'Inserir';
document.body.appendChild(elementButton);

elementButton.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'Nova entrada';
    listaDesordenada.appendChild(li);
});

