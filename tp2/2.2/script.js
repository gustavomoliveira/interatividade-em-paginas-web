/* 
Exercício 2 Adição de classes 
    No arquivo ‘script.js’, adicione uma classe ‘card’ ao elemento ‘<div id=“card”>‘
        Obs.: 
            Não faça as alterações ‘manualmente’ no arquivo ‘index.html’;
            Utilize o ‘DOM’ para resolver o exercício.
*/

let card = document.getElementById('card');
card.classList.add('card');
console.log(card);