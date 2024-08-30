/* 
Exercício 16 Grupo - Acordeão
    Faça um "Accordion". No arquivo script.js, siga as etapas abaixo:
        Todas as divs de "accordion" começam com conteúdo oculto (torne as tags <p> invisíveis).
        Ao clicar em uma <div> de classe “accordion-item”:
            Mostre seu conteúdo.
            Esconda o conteúdo das outras divs de classe accordion-item, caso alguma esteja sendo exibida.
        Obs:
            Utilize o HTML como base, podendo ser modificado livremente.
            Utilize o DOM para resolver o exercício.
            Para o item 1 - adicionar uma classe para ocultar o contéudo da tag <p>
            Para o item 2 - se clicar na div que já está com conteúdo sendo exibido, esconda seu conteúdo.
            DICA - como exemplo olhe o site: https://getbootstrap.com/docs/5.0/components/accordion/
*/

let divsAccordion = document.querySelectorAll('.accordion-item');
let paragrafo = document.querySelectorAll('p');

paragrafo.forEach(para => para.classList.add('invisivel'));

divsAccordion.forEach(el => el.addEventListener('click', function() {
    let divAtual = this.querySelector('p');

    if (divAtual.classList.contains('visivel')) {
        divAtual.classList.remove('visivel');
        divAtual.classList.add('invisivel');
    } else {
        paragrafo.forEach(para => para.classList.add('invisivel'));
        divAtual.classList.remove('invisivel');
        divAtual.classList.add('visivel');
    }
}));




