/* document.addEventListener('mousemove',showCoords); //mousemove event

function showCoords(event){
    document.body.textContent = `(${event.x},${event.y})`;
  } */
//as propriedades de mouse x e y mostram, no eixo, qual a localização exata do mouse na tela

const bomb = document.createElement('div');
  bomb.textContent = '💣';
  bomb.style.position = 'absolute';
  bomb.style.top = Math.floor(200*Math.random()) + 'px';
  bomb.style.left = Math.floor(200*Math.random())+'px';
  bomb.style.fontSize = '64px';
  document.body.appendChild(bomb);

bomb.addEventListener('mouseover', e => {
    document.body.style.background = 'red';
    document.body.innerHTML = '<h1>BOOOOOOM!!!</h1>';
   });
//exemplo de mouseover event