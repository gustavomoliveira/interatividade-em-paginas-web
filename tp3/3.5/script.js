/* 
No javaScript, utilize o evento `onload`, para `trocar` a cor da fonte de todos os elementos `<span>`, para `verde`.
Observações:
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o `DOM` para resolver o exercício.
Utilize o `querySelectorAll()` para selecionar todos os elementos.
*/

window.onload = () => {
    let span = document.querySelectorAll('span');
    span.forEach(el => {
        el.style.color = 'green';
    });
}