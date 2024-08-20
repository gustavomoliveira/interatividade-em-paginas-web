/* 
6. Mudar Imagem ao Passar o Mouse
	•	Objetivo: Mude a imagem exibida ao passar o mouse sobre uma imagem.
	•	Passos:
	1.	Coloque uma imagem na página.
	2.	Adicione um eventListener para os eventos mouseover e mouseout que altere a imagem.
	3.	Restaure a imagem original quando o mouse sair de cima dela.
*/

let imagem = document.querySelector('img');

imagem.addEventListener('mouseover', function() {
    imagem.setAttribute('src', 'imagens/ac2.jpg');
});

imagem.addEventListener('mouseout', function() {
    imagem.setAttribute('src', 'imagens/ac1.jpg');
});