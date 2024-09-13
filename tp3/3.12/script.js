/* 
Grupo - Drag Drop 1:
Utilizando a explicação do CodeSandbox como base, no arquivo script.js crie um programa, que permita:
Mover os elementos div de classe “caixinha” para os elementos <div class='container'>
Arrastar os elementos div de classe “caixinha” entre os elementos <div class='container'>
Obs:
Faça as modificações necessárias no arquivo “index.html” para resolver o exercício.
*/

function start(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.appendChild(document.getElementById(data));
}