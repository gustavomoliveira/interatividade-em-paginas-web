/* 
Ao carregar a página utilizando o evento de “onload”,
adicione um event listener ao input de id “nome".
Esse event listener será de `change` e acionará uma
função chamada “verNome” que exibe o conteúdo do input em um `alert()`.
*/

let input = document.getElementById('nome');

window.onload = () => {
    input.addEventListener('change', function verNome() {
        alert(input.value);
    });
}