/* 
19 – Exercícios para criação de Classes e objetos.
- Crie um objeto Produto: nome, valor unitário, marca.
- Crie um objeto Venda: código, data, Produto.
- Crie um arquivo .html onde sejam mostrados os dados da venda.
*/

/*
20 – Exercício: Construir e utilizar os objetos: Carrinho, produtos, venda.
*/

function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
};

let produto = new Produto("PC", 2500);


function Carrinho(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.total = function() {
        return this.produto.valor * this.quantidade;
    }
};

let carrinho = new Carrinho(produto, 2);
console.log(carrinho.total());

function Venda(codigo, data, carrinho) {
    this.id = codigo;
    this.data = data;
    this.carrinho = carrinho;
};

let venda = new Venda(12345, "2024-07-27", carrinho);


document.getElementById("teste").innerHTML = "A venda de id " + venda.id + ", data " + venda.data + ", do produto " + venda.carrinho.produto.nome + ", de valor " + venda.carrinho.produto.valor + ", deu um total de " + venda.carrinho.total(); 

