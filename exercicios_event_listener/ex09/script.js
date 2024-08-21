/* 
9. Animação de Caixa
	•	Objetivo: Crie uma animação de uma caixa que se move pela tela ao clicar em diferentes botões.
	•	Passos:
	1.	Crie uma caixa (div) na página.
	2.	Adicione quatro botões: “Esquerda”, “Direita”, “Cima”, “Baixo”.
	3.	Use eventListeners nos botões para mover a caixa na direção correspondente quando clicados.
*/

let caixa = document.getElementById('caixa');
let esquerda = document.getElementById('esquerda');
let direita = document.getElementById('direita');
let cima = document.getElementById('cima');
let baixo = document.getElementById('baixo');
let quantidadeMovimento = 10; //quantidade, em px, de movimento da caixa por clique do mouse;

esquerda.addEventListener('click', function() {
    let posicaoAtual = parseInt(window.getComputedStyle(caixa).left); //o método getComputedStyle permite acessar as propriedades do css externo;
    caixa.style.left = (posicaoAtual - quantidadeMovimento) + 'px';
});

direita.addEventListener('click', function() {
    let posicaoAtual = parseInt(window.getComputedStyle(caixa).left);
    caixa.style.left = (posicaoAtual + quantidadeMovimento) + 'px';
});

cima.addEventListener('click', function() {
    let posicaoAtual = parseInt(window.getComputedStyle(caixa).top);
    caixa.style.top = (posicaoAtual - quantidadeMovimento) + 'px';
});

baixo.addEventListener('click', function() {
    let posicaoAtual = parseInt(window.getComputedStyle(caixa).top);
    caixa.style.top = (posicaoAtual + quantidadeMovimento) + 'px';
});