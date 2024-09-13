/* 
Grupo - Event Listener 3:
No arquivo script.js, siga as etapas abaixo:
Adicione um event listener de click, no elemento <ul id=“lista”>
Ao clicar neste elemento <ul>, mude:
O conteúdo do elemento <li> de texto Acre, para o texto Amapá.
Sua cor de fundo para azul.
Obs:
Não faça as alterações manualmente no arquivo index.html.
Utilize o DOM para resolver o exercício.
Utilize o “innerText”, para alterar o `conteúdo` do elemento <span>.
*/

let ul = document.getElementById('lista');

ul.addEventListener('click', () => {
    ul.firstElementChild.innerHTML = 'Amapá';
    ul.firstElementChild.style.backgroundColor = 'blue';
});