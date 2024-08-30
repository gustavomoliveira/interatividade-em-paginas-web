/* 
Exercício 5 Alterando classes II
    No arquivo ‘script.js’, siga as etapas abaixo: 
        Crie a classe ‘titulo’ com:
            text-align: center; 
            color: white; 
            background-color: blue.
        Clique na tag ‘<h1>‘;
            Ao clicar, chame uma ‘função’, que ative/desative a classe chamada ‘“titulo”‘ na tag ‘<h1>‘.
        Obs.:
            Não faça as alterações ‘manualmente’ no arquivo ‘index.html’ 
            Utilize o ‘DOM’ para resolver o exercício 
*/

const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.titulo {text-align: center; color: white; background-color: blue;}';
document.head.appendChild(style);

function ativaDesativa() {
    document.querySelector('h1').classList.toggle('titulo');
}