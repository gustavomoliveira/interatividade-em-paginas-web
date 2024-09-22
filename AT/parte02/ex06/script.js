/* 
Observe o trecho do HTML abaixo e, sem modificá-lo, utilizando event listener, siga os seguintes passos:
Ao clicar no elemento “li” de id=”brasil” o conteúdo desta “li” será copiado para o conteúdo do elemento
“span” de id=”escolhido” e nesse “span” será adicionada uma borda sólida, verde de 1px.
Ao clicar no elemento “li” de id=”argentina” o conteúdo desta “li” será copiado para o conteúdo do
elemento “span” de id=”escolhido” e nesse “span” será adicionada uma borda sólida, azul de 1px.
<span id="escolhido"></span>
   <ul>
     <li id="brasil">Seleção Brasileira</li>
     <li id="argentina">Seleção Argentina</li>
   </ul>
*/

let span = document.getElementById('escolhido');
let brasil = document.getElementById('brasil');
let argentina = document.getElementById('argentina');

brasil.addEventListener('click', () => {
    span.textContent = brasil.textContent;
    span.style.border = '1px solid green';
});

argentina.addEventListener('click', () => {
    span.textContent = argentina.textContent;
    span.style.border = '1px solid blue';
});