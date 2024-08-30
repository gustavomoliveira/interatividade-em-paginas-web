/* 
Exercício 8 Manipulando classes II
    No arquivo ‘script.js’, siga as etapas abaixo: 
        Crie um elemento ‘<span>‘, contendo:
            O texto ‘Olá mundo’.
        Adicione o elemento ‘<span>‘ como ‘filho’ do elemento ‘div’ com a classe ‘“mensagem"‘
        Obs.:
            Não faça as alterações ‘manualmente’ no arquivo ‘index.html’;
            Utilize o ‘DOM’ para resolver o exercício. 
*/

let classeMensagem = document.querySelector('.mensagem');
let tagSpan = document.createElement('span');
tagSpan.textContent = 'Olá mundo';

classeMensagem.appendChild(tagSpan);
