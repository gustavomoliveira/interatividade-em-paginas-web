/* 
Exercício 4 Adicionando classes 
    No arquivo ‘script.js’, siga as etapas abaixo: 
        Crie a classe ‘texto’ com:
            text-align: center; 
            font-weight: bold; 
        Clique no botão da tag ‘<button>‘ 
        Ao clicar, chame uma ‘função’ que adicione a classe chamada ‘“texto”‘ na tag ‘<p>‘ 
        Obs.:
            Não faça as alterações ‘manualmente’ no arquivo ‘index.html’; 
            Utilize o ‘DOM’ para resolver o exercício.
*/


const style = document.createElement('style');
style.type = 'text/css';

style.innerHTML = '.texto {text-align: center; font-weight: bold;}';
document.head.appendChild(style);

function classeTexto() {
    document.querySelector('p').classList.add('texto');
}