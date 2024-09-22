/* 
Observe o formulário no arquivo `index.html` e crie uma função que informe
se o preenchimento do formulário é válido ou inválido. A correta validação será referente à:
Nome com mais de 3 caracteres e menos de 10.
Pelo menos uma área selecionada.
Retire os caracteres especiais do CPF ( . e -) e verifique se possui 11 caracteres.
Verifique se a data de agendamento possui o símbolo "/".
Transforme o endereço em letras minúsculas e verifique se existe a palavra “rua” de forma exata.
*/

let botao = document.querySelector('button');

botao.addEventListener('click', (ev) => {
  ev.preventDefault();
  let nome = document.getElementById('nome').value.trim();
  let area = document.getElementsByClassName('area');
  let cpf = document.getElementById('cpf').value.trim();
  let data = document.getElementById('data');
  let endereco = document.getElementById('endereco').value.trim().toLowerCase(); //value já em minúsculas.
  let validaForm = true;
  let areaSelecionada = '';

  let erroNome = document.getElementById('erroNome');
  let erroArea = document.getElementById('erroArea');
  let erroCpf = document.getElementById('erroCpf');
  let erroData = document.getElementById('erroData');
  let erroEndereco = document.getElementById('erroEndereco');

  erroNome.textContent = '';
  erroArea.textContent = '';
  erroCpf.textContent = '';
  erroData.textContent = '';
  erroEndereco.textContent = '';

  if(nome.length < 3 || nome.length > 10) {
    erroNome.textContent = 'Campo "Nome" inválido. Digite entre 3 e 10 caracteres.';
    validaForm = false;
  }

  for (let i = 0; i < area.length; i++) {
    if (area[i].checked) {
      areaSelecionada = true;
      break;
    }
  }

  if (!areaSelecionada) {
    erroArea.textContent = 'Selecione pelo menos uma área.';
    validaForm = false;
  }

  //expressão regex para procurar todos os "." e "-" no input. o uso do "g" denota que a busca deve ser global na string e não apenas o primeiro encontrado.
  cpf = cpf.replace(/\./g, '').replace(/-/g, '');
  if (cpf.length !== 11) {
    erroCpf.textContent = 'Digite um CPF válido, com 11 caracteres.';
    validaForm = false;
  }

  if(!data.value.includes('/')) {
    erroData.textContent = 'O caracter "/" é obrigatório para o campo data.';
    validaForm = false;
  }

  if(!endereco.includes('rua')) {
    erroEndereco.textContent = 'A palavra "rua" está escrita de forma incorreta ou não existe.';
    validaForm = false;
  } 

  if (validaForm) {
    alert('Formulário enviado com sucesso!');
  }
});