/* 
4. Mostrar/Ocultar Texto
	•	Objetivo: Crie um botão que mostre ou oculte um texto ao ser clicado.
	•	Passos:
	1.	Crie um parágrafo com algum texto.
	2.	Crie um botão com o texto “Mostrar/Ocultar”.
	3.	Adicione um eventListener ao botão para alternar a visibilidade do parágrafo (use display: none e display: block).
*/

let button = document.querySelector('button');
let para = document.querySelector('p');

button.addEventListener('click', visivel);
function visivel() {
    para.classList.toggle('para');
}

