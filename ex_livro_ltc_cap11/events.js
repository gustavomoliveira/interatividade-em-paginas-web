/* document.addEventListener('click',bang);

function bang(){
    document.body.style.background = 'yellow';
    document.body.innerHTML = `<h1>BANG!!!</h1>`;
  } 
 
*/

const redButton = document.getElementById('red');
redButton.addEventListener('click', e => document.body.style.background = 'red');

const greenButton = document.getElementById('green');
greenButton.addEventListener('click', e => document.body.style.background = e.target.textContent);
/* e.target.textContent - o target direciona para o elemento que foi clicado, o botão verde, referênciando
o texto dentro do elemento, no caso, "Green" ou seja, assim que clicado,
o background muda para a cor especificada, no caso o verde. */