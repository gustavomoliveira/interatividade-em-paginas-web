//evento de teclado com suas propriedades code e key;
/* document.addEventListener('keydown',e => document.body.innerHTML = `<div>e.code: ${e.code}</div><div>
    e.key: ${e.key}</div>`); */

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keyup', e => output.textContent = input.value);
//o evento é disparado todas as vezes quando a tecla é "solta" e o caracter aparece no campo output;