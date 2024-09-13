/* 
Grupo - Drag Drop 2:
Utilizando a explicação do exercício anterior no CodeSandbox como base, no arquivo script.js crie um programa, que permita:
Através do click do botão de id criar, você deve criar e adicionar elementos <div class='caixinha'> no elemento div de id novo
O novo elemento criado deve possuir uma das classes de cores que estão no arquivo CSS (corVerde, corRoxa, corLaranja ou corVermelha)
Permitir arrastar os itens criados para os elementos <div class='container'>
Permitir arrastar os elementos div de classe caixinha entre os elementos <div class='container'>
Obs:
Faça as modificações necessárias no arquivo “index.html” para resolver o exercício.
*/

let botaoCriarCaixinha = document.querySelector('button');
let divNovo = document.getElementById('novo');

//array contendo todas as classes do css;
const arrayClasses = ['corVerde', 'corRoxa', 'corLaranja', 'corVermelha']
//variável iniciada que será usada para gerar ids;
let contador = 0;

botaoCriarCaixinha.addEventListener('click', () => {
    //criação de divs;
    let divCaixinha = document.createElement('div');
    //adição da classe 'caixinha' as divs criadas;
    divCaixinha.classList.add('caixinha');

    //seleciona uma classe aleatoriamente do vetor arrayClasse;
    let classeAleatoria = arrayClasses[Math.floor(Math.random() * arrayClasses.length)]; 
    //adição da classe aleatória a div caixinha;
    divCaixinha.classList.add(classeAleatoria);

    //adição de id a div caixinha;
    divCaixinha.id = 'caixinha-' + contador;
    contador++;

    //criação e implementação do atributo 'draggable';
    divCaixinha.setAttribute('draggable', 'true');
    divCaixinha.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
    divNovo.appendChild(divCaixinha); 
});

//código para permissão do drop no elemento receptor;
function allowDrop(event) {
    event.preventDefault();
}

//código para o drop em si;
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.appendChild(document.getElementById(data));
}

