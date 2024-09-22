/* 
No arquivo `index.html` crie a lista abaixo e ao clicar em um elemento “li”
que está dentro do elemento “ul”, acesse este elemento “li” e:
Alemanha
Itália
Suécia
Caso possua a classe “corVerde”, remova-a e adicione a classe “corRoxa” na “ul”.
Use a palavra chave parentNode.
Caso possua a classe “corAmarela”, adicione a classe “corAzul” na “li” e remova a
classe “corPreta” do elemento “ul”. Use a palavra chave parentNode.
*/

//OBS: Classes criadas no CSS.

let li = document.querySelectorAll('li');
console.log(li);

li.forEach(el => {
    el.addEventListener('click', () => {
        if(el.classList.contains('corVerde')) {
            el.classList.remove('corVerde');
            el.parentNode.classList.add('corRoxa');
        }
        if(el.classList.contains('corAmarela')) {
            el.classList.add('corAzul');
            el.parentNode.classList.remove('corPreta');
        }
    });
});
