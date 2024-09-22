/* 
Pergunte ao usuário o nome do seu país, continente e sua capital e:
Crie uma função construtora chamada País que tenha essas propriedades.
Crie um objeto através da função construtora, utilizando os valores digitados pelo usuário.
*/

function Pais(nome, continente, capital) {
    this.nome = nome;
    this.continente = continente;
    this.capital = capital;
}

function criaPais() {
    let nome = document.getElementById('nome').value;
    let continente = document.getElementById('continente').value;
    let capital = document.getElementById('capital').value;

    let meuPais = new Pais(nome, continente, capital);

    document.getElementById('resultado').textContent = 
    `País inserido: Nome: ${meuPais.nome} - Continente: ${meuPais.continente} - Capital: ${meuPais.capital}`;
}