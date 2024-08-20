/* 
3. Contador de Cliques
	•	Objetivo: Crie um contador que aumente em 1 a cada clique em um botão.
	•	Passos:
	1.	Crie um botão com o texto “Clique me”.
	2.	Adicione um parágrafo que mostre o número de cliques.
	3.	Use um eventListener para incrementar o contador toda vez que o botão for clicado e atualize o parágrafo.
*/

let button = document.querySelector('button');
let para = document.querySelector('p');
let cont = 0;

button.addEventListener('click', contador);
function contador() {
    cont++;
    para.textContent = `Números de cliques: ${cont}`;
}