document.getElementById('p1').title = 'Conteúdo modificado';//alterando o atributo "title";

document.getElementById('acdog1').src = 'acdog2.jpg';//alterando o atributo "src" da img para substituir as imagens;

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