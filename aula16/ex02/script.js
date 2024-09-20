/* 
Pergunte ao usuário o nome do seu Município, Bairro e sua rua. Crie uma função
construtora chamada Municipio que tenha essas propriedades. Crie um objeto através
da função construtora, utilizando os valores digitados pelo usuário.
*/

// Função construtora para o objeto Municipio
function Municipio(municipio, bairro, rua) {
    this.municipio = municipio;
    this.bairro = bairro;
    this.rua = rua;
}

function criarObjetoMunicipio() {
    // Capturando os valores dos campos
    let municipio = document.getElementById("municipio").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;
    // Criando o objeto utilizando a função construtora
    let endereco = new Municipio(municipio, bairro, rua);
    // Exibindo o objeto na tela
    document.getElementById("resultado").innerText =
    "Endereço cadastrado:\n" +
    "Município: " 
    endereco.municipio +
    "\n" +
    "Bairro: " +
    endereco.bairro +
    "\n" +
    "Rua: " +
    endereco.rua;
}