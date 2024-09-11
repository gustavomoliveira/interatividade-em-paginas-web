/* 
No arquivo `index.html`, siga as etapas abaixo:
Crie uma lista `não ordenada`, com `3` elementos `<li>` dentro, contendo:
Os textos: `Maçã`, `Banana`, `Manga`.
No javaScript, utilizando eventListener, faça com que ao clicar em um elemento `<li>` seja exibido o conteúdo desta tag `li` em um `alert`.
Observações:
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o `DOM` para resolver o exercício.
*/

let li = document.querySelectorAll('li');

li.forEach(el => {
    el.addEventListener('click', () => {
        alert(el.textContent);
    });
});