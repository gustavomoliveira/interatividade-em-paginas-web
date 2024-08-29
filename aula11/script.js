window.onload = function() {
    document.getElementById('nome').focus();
};

function mostraDados(){
    let dados = document.getElementById("dados");
    
    dados.innerHTML = "DADOS <br>"+
    "<br> Nome: "+document.getElementById('nome').value +
    "<br> Sobrenome: "+document.getElementById('sobrenome').value +
    "<br> Curso: "+document.getElementById('disciplina').value;
    const input = document.getElementById('nome');
    input.value = ''; // Limpa o conteúdo do input
    const input2 = document.getElementById('sobrenome');
    input2.value = ''; // Limpa o conteúdo do input
    input.focus(); // Seta o foco novamente no input
}

document.getElementById('nome').oninput = function() {
    this.value = this.value.replace(/[0-9]/g, '');//garante que o usuário não insira números;
    this.value = this.value.toUpperCase()
};
/* 
- A função replace(/[0-9]/g, '') substitui qualquer número digitado por uma string vazia, removendo assim os números
do campo de entrada.
- O modificador /g na expressão regular significa "global". Ele é usado para garantir que todas as ocorrências de números no texto
sejam substituídas, e não apenas a primeira.
*/
document.getElementById('sobrenome').oninput = function() {
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.toUpperCase()
};