/* 
Exercício 3 Alterando classes  I
HTML:
    No arquivo ‘index.html’, crie um elemento ‘<h1>‘, contendo o texto ‘Título’ e uma função de click.
JavaScript:
    No arquivo ‘script.js’, ao clicar no ‘<h1>‘, faça com que a classe ‘corVermelha’ seja ‘Adicionada/removida’ alternadamente,
    ao ‘clicar’ neste elemento. 
CSS:
    No arquivo ‘style.css’, crie a classe ‘corVermelha’, que possui a propriedade ‘color: red;’.
        Obs.:
            Utilize o ‘DOM’ para resolver o exercício;
            Utilize o método ‘toggle()’, para adicionar/remover a ‘cor’.
*/

let titulo = document.querySelector('h1');

function trocar() {
    titulo.classList.toggle('corVermelha');
}
