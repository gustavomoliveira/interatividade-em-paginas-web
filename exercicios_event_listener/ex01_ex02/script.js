/* 
1. Alteração de Texto
	•	Objetivo: Crie um botão que, quando clicado, altera o texto de um parágrafo na página.
	•	Passos:
	1.	Crie um botão com o texto “Clique aqui”.
	2.	Adicione um parágrafo com algum texto.
	3.	Use um eventListener para alterar o texto do parágrafo quando o botão for clicado.
*/

let button = document.getElementById('button');
let paragrafo = document.getElementById('para');

button.addEventListener('click', alteraP)

function alteraP() {
    paragrafo.textContent = 'Texto alterado';
}

/* 
2. Mudar Cor de Fundo
	•	Objetivo: Mude a cor de fundo da página ao clicar em diferentes botões.
	•	Passos:
	1.	Crie três botões com as cores “Vermelho”, “Verde” e “Azul”.
	2.	Adicione eventListeners a cada botão para que, ao clicar, a cor de fundo da página mude para a respectiva cor do botão.
*/

let botoes = document.querySelectorAll('button');
console.log(botoes);

botoes.forEach(el => {
    el.addEventListener('click', mudaFundo);
    function mudaFundo() {
        document.body.style.backgroundColor = el.textContent;
    }
});


