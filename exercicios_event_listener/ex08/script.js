/* 
8. Formulário de Inscrição
	•	Objetivo: Valide um formulário simples de inscrição.
	•	Passos:
	1.	Crie um formulário com campos de nome, email e senha.
	2.	Adicione um botão de “Enviar”.
	3.	Adicione um eventListener ao botão para validar os campos (verifique se estão preenchidos e se o email é válido).
	4.	Mostre uma mensagem de erro ou sucesso dependendo da validação.
*/

let buttonEnviar = document.querySelector('button');
let message = document.getElementById('message');

buttonEnviar.addEventListener('click', function(e) {
	e.preventDefault();

	let inputName = document.getElementById('name').value.trim(); //o metodo trim() garante que não haverá espaços em branco a/d do preenchimento;
	let inputEmail = document.getElementById('email').value.trim();
	let inputPassword = document.getElementById('password').value.trim();

    if(inputName === '' || inputPassword === '' || inputEmail === '') {
		message.textContent = 'Verifique o preenchimento dos campos e tente novamente.'
		message.style.color = 'darkred'
	} else if(!validateEmail(inputEmail)) {
		message.textContent = 'Dados de e-mail incorretos. Tente novamente.'
		message.style.color = 'darkred'
	} else {
		message.textContent = 'Dados enviados com sucesso!'
		message.style.color = 'green'
	}
});

function validateEmail(email) { //função regex para validação de email;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}
	
