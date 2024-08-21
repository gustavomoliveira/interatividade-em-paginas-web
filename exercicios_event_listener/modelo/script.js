/* 
10. Desfazer Ação
	•	Objetivo: Adicione a funcionalidade de desfazer a última ação de clique.
	•	Passos:
	1.	Crie um botão que altere a cor de fundo de um parágrafo aleatoriamente ao ser clicado.
	2.	Crie um segundo botão “Desfazer” que restaure a cor anterior do parágrafo.
	3.	Use eventListeners para implementar essa funcionalidade de desfazer.
*/

let para = document.getElementById('p1');
let alteraCor = document.getElementById('alteraCor');
let desfazer = document.getElementById('desfaz');
let corAnterior = para.style.backgroundColor; //armazena a cor inicial em uma variável;

alteraCor.addEventListener('click', function() {
    let corAleatoria = Math.floor(Math.random()*16777215).toString(16); //função para gerar cor aleatória sem o sinal de #;
    para.style.backgroundColor = '#' + corAleatoria;
});

desfazer.addEventListener('click', function(){
    para.style.backgroundColor = corAnterior;
});