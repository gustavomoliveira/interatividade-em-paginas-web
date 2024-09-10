/* 
No javaScript, adicione um evento de `click` ao elemento `<h1>`, que ao ser clicado, adicione o estilo `background-color: red`.
Observações:
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o `DOM` para resolver o exercício.
*/

let h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.style.backgroundColor = 'red';
});