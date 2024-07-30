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

let pc = new Produto("PC", 2500);
let videogame = new Produto("Switch", 300);
let notebook = new Produto("MacBook Pro", 3000);
let celular = new Produto("iPhone", 1200);


function Carrinho() {
    this.produto = [];
    this.adicionarProduto = function(produto) {
        return this.produto.push(produto);
    };
    this.removerProduto = function() {
        return this.produto.pop();
    };
    this.listarProduto = function() {
        return this.produto.length;
    }
};

let carrinho = new Carrinho();
console.log(carrinho.adicionarProduto(pc));
console.log(carrinho.adicionarProduto(videogame));
console.log(carrinho.adicionarProduto(notebook));
console.log(carrinho.adicionarProduto(celular));
console.log(carrinho.removerProduto());
console.log(carrinho.listarProduto());

/* function Venda(codigo, data, carrinho) {
    this.id = codigo;
    this.data = data;
    this.carrinho = carrinho;
};

let venda = new Venda(12345, "2024-07-27", carrinho);


document.getElementById("teste").innerHTML = "A venda de id " + venda.id + ", data " + venda.data + ", do produto " + venda.carrinho.produto.nome + ", de valor " + venda.carrinho.produto.valor + ", deu um total de " + venda.carrinho.total(); 
 */


