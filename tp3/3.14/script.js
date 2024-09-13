/* 
Grupo - Event Listener 1:
No arquivo script.js, siga as etapas abaixo:
Adicione um event listener de keydown, ao elemento <input id=“texto”>.
Verifique se o usuário apertou a tecla Enter enquanto está com o input selecionado.
Caso tenha apertado a tecla, o conteúdo do elemento <input> será copiado para o span de id nome.
Após isso limpe o conteúdo do elemento <input>.
Obs:
Não faça as alterações manualmente no arquivo index.html.
Utilize o DOM para resolver o exercício.
Utilize o `textContent`, para alterar o `conteúdo` do elemento <span>.
*/

let input = document.getElementById('texto');
let span = document.getElementById('nome');

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        let inputContent = input.value;
        span.textContent = inputContent;
        input.value = '';
    }
});