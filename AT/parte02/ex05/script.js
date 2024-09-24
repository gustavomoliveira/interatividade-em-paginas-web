/* 
Adicione um evento de teclado que capture e informe através de alerta
todas as teclas digitadas em um input de id “email” que deve ser criado no arquivo `index.html`. 
Opcionalmente, adicione um evento que mostre todo o conteúdo
do input ao término da digitação (quando o usuário clicar fora do input).
*/

let input = document.getElementById('email');

input.addEventListener('keydown', function(event) {
    alert('Tecla: ' + event.key);
});

input.addEventListener('blur', () => {
    if(input.value.trim() !== '') {
        alert('Conteúdo digitado: ' + input.value); 
    } 
});