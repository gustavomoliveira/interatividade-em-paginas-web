/* 
7. Somar Números
	•	Objetivo: Crie uma pequena calculadora de soma.
	•	Passos:
	1.	Crie dois campos de entrada de número.
	2.	Crie um botão com o texto “Somar”.
	3.	Adicione um parágrafo para mostrar o resultado.
	4.	Adicione um eventListener ao botão para somar os valores dos dois campos de entrada e mostrar o resultado no parágrafo.
*/

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let button = document.getElementById('button');
let para = document.getElementById('para');

button.addEventListener('click', function() {
    para.textContent = Number(num1.value) + Number(num2.value);
});