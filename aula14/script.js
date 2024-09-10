//validação de campos para submissão

function validaForm() {
  let campoNome = document.forms["form"]["name"].value;
  let idade = document.getElementById("idade").value;

  if (campoNome == "") {
    alert("O nome deve ser preenchido.");
    return false; /* garante que o form não será submetido enquanto o preenchimento não for true */
  }

  if (campoNome.length < 3) {
    alert("O nome deve ter pelo menos três caracteres.");
    return false;
  }

  if (isNaN(idade) || idade < 18 || idade > 70) {
    alert("Idade deve ficar entre 18 e 70 anos.");
    return false;
  }

  let generoSelecionado = document.querySelector('input[name="genero"]:checked'); /* verifica se há algum input selecionado. check através do atributo name */
  
  if (!generoSelecionado) {
    alert("Selecione seu gênero.");
    return false;
  }

  let atividadesTexto = "";
  let atividadesSelecionadas = document.querySelectorAll('input[name="atividades"]:checked'); /* verifica se há algum input selecionado. check através do atributo name */
  
  if (atividadesSelecionadas.length === 0) {
    alert("Selecione pelo menos uma atividade.");
    return false;
  } else {
    let atividades = [];
    atividadesSelecionadas.forEach(atividadesSelecionadas => atividades.push(atividadesSelecionadas.value));
    atividadesTexto = atividades.join(", ");
  }
  
  let paisSelecionado = document.getElementById("pais").value;

  if (paisSelecionado === "") {
    alert("Selecione o seu País.");
    return false;
  }

  let resultado =
    "Nome: " +
    campoNome +
    "<br>" +
    "Idade: " +
    idade +
    "<br>" +
    "Gênero " +
    generoSelecionado.value +
    "<br>" +
    "Atividades: " +
    atividadesTexto +
    "<br>" +
    "País: " +
    paisSelecionado;

  //Exibindo resultado na tela
  document.getElementById("dados").style.display = "block";
  document.getElementById("resultado").innerHTML = resultado;
  return false;
}
