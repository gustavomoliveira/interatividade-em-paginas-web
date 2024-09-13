/* 
Grupo - Event Listener 2:
No arquivo script.js, siga as etapas abaixo:
Adicione um event listener de click, ao elemento <div id=“container”>
Ao clicar neste elemento “<div>”, o conteúdo do elemento “<span>”, filho do elemento clicado, irá se tornar a palavra ”teste”.
Obs:
Não faça as alterações manualmente no arquivo index.html.
Utilize o DOM para resolver o exercício.
Utilize o `textContent`, para alterar o `conteúdo` do elemento <span>.
*/

let div = document.getElementById('container');
let span = document.querySelector('span');

div.addEventListener('click', () => {
    span.textContent = 'teste'
});
