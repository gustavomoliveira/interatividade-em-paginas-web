/* 
No javaScript:
Crie um elemento `<div id=“card”>`.
Utilize o evento `onload`, para trocar:
A borda deste elemento `<div>`, para `4px dashed orange`.
No CSS.
Adicione ao identificador `card`:
A borda de `3px dotted green`.
Largura de `200px`.
Altura de `200px`.
Observações:
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o `DOM` para resolver o exercício.
*/

const divCard = document.createElement('div');
divCard.id = 'card';
document.body.appendChild(divCard);

window.onload = () => {
    divCard.style.border = '4px dashed orange';
}




