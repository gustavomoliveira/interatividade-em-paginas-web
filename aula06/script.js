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

/* exercício prático 3 */

