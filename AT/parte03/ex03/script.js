/* 
Crie um formulário contendo os campos nome, e-mail e CPF.
Obtenha e valide as informações pelo JavaScript.
O campo nome não pode estar vazio, o campo e-mail deve possuir um “@” e o campo CPF deve possuir 11 ou 14 caracteres.
*/

let botao = document.querySelector('button');

botao.addEventListener("click", (ev) => {
  ev.preventDefault();
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let erroNome = document.getElementById("erroNome");
  let erroEmail = document.getElementById("erroEmail");
  let erroCpf = document.getElementById("erroCpf");
  let formValido = true;

  erroNome.textContent = "";
  erroEmail.textContent = "";
  erroCpf.textContent = "";

  if (nome === "") {
    erroNome.textContent = 'O campo "Nome" não pode estar vazio.';
    formValido = false;
  }

  if (!email.includes("@")) {
    erroEmail.textContent =
      'O campo "E-mail" precisa de "@". Digite um e-mail válido.';
    formValido = false;
  }

  if (cpf.length !== 11 && cpf.length !== 14) {
    erroCpf.textContent = "Digite um CPF válido, 11 ou 14 caracteres.";
    formValido = false;
  }

  if (formValido) {
    alert("Formulário enviado com sucesso!");
  }
});

