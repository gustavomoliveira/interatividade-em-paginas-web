//exemplo de objeto com vários atributos e métodos. modelo mais complexo.
/* let pessoa1 = {
  nome: ["Bob", "Smith"], //um array;
  idade: 32, // um number;
  sexo: "masculino", //uma string;
  interesses: ["música", "esquiar"], //um array;
  bio: function () {
    //um método;
    alert(
      this.nome[0] +
        " " +
        this.nome[1] +
        " tem " +
        this.idade +
        " anos de idade. Ele gosta de " +
        this.interesses[0] +
        " e " +
        this.interesses[1] +
        "."
    );
  },
  saudacao: function () {
    //um método;
    alert("Oi! Eu sou " + this.nome[0] + ".");
  },
}; */

//exemplo de método construtor.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//exemplo de criação de classe
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}