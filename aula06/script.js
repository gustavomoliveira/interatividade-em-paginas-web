/* exercício prático 1 */

let produto = {
    nome: 'Relógio',
    quantidade: 2
};

console.log(produto);

/* exercício prático 2 */

/* let vinho = {
    ano: '1968',
    marca: 'Bordeaux'
};

console.log(vinho); */

/* exercício prático 3 */

class Vinho { //sempre que o exercício se referir a objeto instanciado, é necessário a criação da classe antes;
    constructor() {
        this.ano = '1968';
        this.marca = 'Bordeaux';
    }
    envelhecer() {
        return 'Envelhecendo...';
    }
}

let vinho = new Vinho(); //objeto instanciado; instanciar é criar uma cópia de um modelo pre definido, no caso uma classe;
console.log(vinho.envelhecer());
console.log(vinho);

/*
4. Criando objeto à partir de variáveis
No arquivo script.js, siga as etapas abaixo:
o Crie duas variáveis contendo:
o O nome de uma `empresa`.
o O `ano de fundação` desta empresa.
o Crie um objeto “empresa” que possua propriedades que
utilize estas variáveis.
*/

let nomeEmpresa = 'Bartolomeu & Cafés';
let anoFundacao = 2024;

let empresa = {
    nomeEmpresa,
    anoFundacao
};

console.log(empresa);

//criação de classe para sequência aos pre requisitos dos demais exercícios

class Empresa {
    constructor(n, f) { //diferente de Java, apenas um método construtor por class;
        this.nome = n;
        this.ano = f;
        this.nomePresidente = 'Gustavo'; //resolução exercício 5 a partir dessa linha com criação de novas propriedades;
        this.numeroFuncionarios = 3;
        this.telefone = '+41 079 999 99 99';
    }
    obterPresidente() { //resolução do exercício 6;
        return this.nomePresidente;
    }
}

let novaEmpresa = new Empresa('Bartolomeu & Cafés', 2024);
console.log(novaEmpresa);

/* 
5. Adicionando propriedades em objeto
No arquivo script.js, siga as etapas abaixo:
o Adicione ao objeto “empresa” criado no exercício anterior:
o As propriedades “nomePresidente”,
"numeroFuncionario" e “telefone”.
*/

/*
6. Adicionando método em objeto
No arquivo script.js, continuando o que foi feito no exercício anterior, siga
as etapas abaixo:
o Adicione um método chamado “obterPresidente”, que ao ser
chamado:
o Mostra o nome do `presidente` da empresa.
o Chame o método “obterPresidente” a partir do objeto.
*/

console.log(novaEmpresa.obterPresidente());

/*
7. Removendo uma propriedade de um objeto
No arquivo script.js, siga as etapas abaixo:
o Remova a propriedade `ano de fundação`, do objeto “empresa"
criado nos exercícios anteriores, através da remoção de
propriedade.
o Não recrie o objeto sem a propriedade. O objeto inicialmente terá
tudo o que foi feito nos exercícios anteriores. Remova através de
codificação.
*/

delete novaEmpresa.ano;
console.log(novaEmpresa);

/*
8. Utilizando a palavra reservada “this”
No arquivo script.js, siga as etapas abaixo:
o Crie um objeto `“funcionario”` que possua:
o As propriedades “nome”, “horasTrabalhadas” e
“valorHora”.
o Crie também neste objeto, um método chamado
“calcularGanho”.
o Chame o método "calcularGanho" através de um objeto
instanciado.
o No método, realize a multiplicação das “horas trabalhadas” pelo
valor que o funcionario ganha por hora.
o Use a palavra chave “this".
*/

class Funcionario {
    constructor(n, ht, vlh) {
        this.nome = n;
        this.horasTrabalhadas = ht;
        this.valorHora = vlh;
    }
    calcularGanho() {
        return this.horasTrabalhadas * this.valorHora;
    }
}

let funcionario = new Funcionario('Barto', 100, 200);

console.log(funcionario);
console.log('O valor do salário é de R$' + funcionario.calcularGanho());

/*
12. Grupo - Objetos aninhados:
No arquivo script.js, siga as etapas abaixo:
o Crie um objeto “pais”. Este objeto vai conter:
o Uma propriedade para “nome”.
o Uma propriedade para “ano de independencia”.
o Uma propriedade que será um objeto “presidente”.
o O objeto “presidente” que está dentro do objeto “pais” possui:
o Uma propriedade para o “nome”.
o Uma propriedade para a “idade”.
*/

let pais = {
    nome: 'Brasil',
    anoIndependencia: 1822,
    presidente: {
        nome: 'Barto',
        idade: 3
    }
};
console.log(pais);

/*
13. Grupo - Objeto com método usando “this”:
No arquivo script.js, siga as etapas abaixo:
o Peça ao usuário para informar o lado de um quadrado.
o Crie um objeto “quadrado” que tenha:
o Uma propriedade de `lado` com o valor informado pelo
usuário.
o E dois métodos, um para calcular o `perímetro` e outro
para calcular a `área`.
o Exiba o perímetro através da chamada do método respectivo do
objeto “quadrado”.
o Exiba a área através da chamada do método respectivo do objeto
“quadrado”.
o Considere para o perímetro:
perimetro = 4* lado
o Considere para a área:
*/

let ladoQuadrado = parseFloat(prompt('Digite o valor do lado do quadrado'));

let quadrado = {
    lado: ladoQuadrado,
    perimetro: function() {
        return this.lado * 4;
    },
    area: function() {
        return this.lado * this.lado;   
    }
};

console.log(quadrado.perimetro());
console.log(quadrado.area());
