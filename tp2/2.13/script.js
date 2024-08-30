/* 
Exercício 13 Grupo - Modal
    No arquivo script.js, siga as etapas abaixo:
        Adicione a classe hide na <div> de id=“modal”.
        Faça com que este elemento div, através da classe criada, não seja mais visível na tela.
        Para isto crie a classe que faça este efeito no arquivo style.css e adicione esta classe via DOM.
        Clique no botão da tag <button>.
        Ao clicar no botão chame uma função, que faça aparecer a "modal" na tela.
        Ao clicar na imagem de id=“close”, faça a "modal" desaparecer novamente.
        Utilize o DOM para resolver o exercício.
*/

let divModal = document.getElementById('modal');
let imagem = document.getElementById('close');

divModal.classList.add('hide');

function aparecer() {
    divModal.classList.remove('hide');
}

imagem.addEventListener('click', function() {
    divModal.classList.add('hide');
});

