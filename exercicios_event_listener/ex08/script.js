/* 
8. Formulário de Inscrição
	•	Objetivo: Valide um formulário simples de inscrição.
	•	Passos:
	1.	Crie um formulário com campos de nome, email e senha.
	2.	Adicione um botão de “Enviar”.
	3.	Adicione um eventListener ao botão para validar os campos (verifique se estão preenchidos e se o email é válido).
	4.	Mostre uma mensagem de erro ou sucesso dependendo da validação.
*/

let inputName = document.getElementById('name').value;
let inputEmail = document.getElementById('email').value;
let inputPassword = document.getElementById('password').value;
let buttonEnviar = document.querySelector('button');

buttonEnviar.addEventListener('click', function() {
    if(inputName !== '' && inputPassword !== '' && inputEmail !== '') {
        alert('Sucesso no preenchimento do formulário!');
    } else {
        alert('Verifique os dados e tente novamente.');
    }
});
