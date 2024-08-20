/* 
5. Eventos de Teclado
	•	Objetivo: Capture as teclas digitadas e mostre em tempo real no navegador.
	•	Passos:
	1.	Crie um campo de entrada de texto (input).
	2.	Adicione um eventListener que capture o evento keyup.
	3.	Mostre em tempo real o texto digitado em um parágrafo abaixo do campo de entrada.
*/

let input = document.getElementById('text');
let para = document.getElementById('para');

input.addEventListener('keyup', tecla);
function tecla(e) {
    para.textContent = e.target.value;
}