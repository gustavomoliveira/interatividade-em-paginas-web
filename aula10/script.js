//utilizando a função 'onkeydown';
function myFunction() {
    document.getElementById("demo").innerHTML = "Tecla pressionada";
}

//descobrindo qual a tecla pressionada pelo usuário no campo input utilizando a propriedade .key do evento do teclado;
let inputField = document.getElementById('inputText');
let output = document.getElementById('demo');

inputField.addEventListener('keydown', function(event) {
    output.textContent = 'Você pressionou: '+ event.key;
    if(event.key === 'a' || event.key === 'A') {
        alert('Tecla A pressionada!');
    }
});

//utilizando a função de foco e blur para destacar um campo para o usuário;
function destacar() {
    document.getElementById("nome").style.backgroundColor = "green";
}

function normalizar() {
    document.getElementById("nome").style.backgroundColor = "white";
}

//utilizando o método onchange para garantir que o campo input receba o valor em maiusculo na saída da seleção;
function colocarMaiuscula(element) {
    element.value = element.value.toUpperCase();
}

//ainda utilizando onchange, essa função faz a troca de seleção na lista de opções;
function mostraSelecao() {
    let x = document.getElementById("curso").value;
    document.getElementById("botao").innerHTML = "Curso de " + x; }