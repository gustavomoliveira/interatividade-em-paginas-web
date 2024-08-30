/* 
Exercício 9 Usando 'this'
HTML:
    No arquivo `index.html`, adicione o evento de `Click` ao elemento `<h2>`.
JavaScript:
    No arquivo `script.js`, ao clicar no elemento `<h2>` com texto `Olá`, mude seu conteúdo para `Clicado`.
    Obs.:
        Utilize a palavra chave `this`, no arquivo `index.html`.
*/

function mudar(el) {
    el.textContent = 'Clicado';
}