document.getElementById('p1').title = 'Conteúdo modificado';//alterando o atributo "title";

document.getElementById('acdog1').src = 'acdog2.jpg';//alterando o atributo "src" da img para substituir as imagens;

function checkCookies() {//exemplo de uma função que conferir a habilitação de cookies no navegador. é um atributo pre definido;
    let text = '';
    if(navigator.cookieEnabled == true) {//navigator é um objeto que representa o navegador da página e o cookieEnable é um atributo dele;
        text = 'Cookies estão habilitados!';
    } else {
        text = 'Cookies estão desabilitados!';
    }
    document.getElementById('p1').innerHTML = text;
}

function tornaMaiuscula() {
    const x = document.getElementById("nome");
    x.value = x.value.toUpperCase();//o valor que está contido em x é igual ao mesmo valor, porém em maiusculo;
}

function mOver(obj) {//o parâmetro passado é o elemento referenciado pelo this;
    obj.innerHTML = "Obrigado!";
}

function mOut(obj) {
    obj.innerHTML = "Mova o mouse sobre ";
}

const p3 = document.createElement('p');//criando um terceiro p;
const notxt = document.createTextNode('Esse é o texto do p3');//criando o texto que estará dento do p3;
p3.appendChild(notxt);//texto adicionado ao p3;

const element = document.getElementById('div1');
element.appendChild(p3);//inserindo o p3, já com o texto, na div pai;

const p1 = document.getElementById('pum');
p1.remove();//método para remoção do elemento;

const p2 = document.getElementById('p2');
element.replaceChild(p3, p2);//método para substituição de elementos. o p3 estava em element, mas foi substituído por p2;

function trocaTexto(id) {
    id.innerHTML = "Texto Trocado";//o id é passado como parâmetro e ocorre a troca do texto;
}

function displayDate() {
    document.getElementById("pdata").innerHTML = Date();//função que gera data baseada no relógio;
}