/*
9. Adicionando atributo
No arquivo script.js, siga as etapas abaixo:
o Adicione o atributo “title” na tag <img>, colocando o conteúdo
como “Imagem HTML 5”.
o Obs:
o Não faça as alterações `manualmente` no arquivo
`index.html`.
o Utilize o DOM para resolver o exercício.
*/
if (typeof document !== 'undefined') { //código para validar o Node.js sem erro do document
    let element = document.querySelector('.class-name')

let img = document.querySelector('img');
img.setAttribute('title', 'Imagem HTML 5');

console.log(img.getAttribute('title'));

/*
10. Removendo atributo
No arquivo script.js, siga as etapas abaixo:
o Remova o atributo “target” na tag <a>.
o Obs:
o Não faça as alterações `manualmente` no arquivo
`index.html`.
o Utilize o DOM para resolver o exercício.
*/

let link = document.querySelector('a');
link.removeAttribute('target'); //atributo target _blank abre a página do link em uma nova aba
console.log(link.getAttribute('target'));

/*
11. Alterando atributo
No arquivo `script.js`, selecione o elemento com id "box" e altere através
de alteração de atributo via JavaScript:
o A cor de fundo para verde.
o A borda para sólida, vermelha com 2px de largura.
o Obs:
o Não faça as alterações `manualmente` no arquivo
`index.html`.
o Utilize o DOM para resolver o exercício.
*/

let elemento = document.getElementById('box');
elemento.style.border = '2px solid red';
elemento.style.backgroundColor = 'green';
elemento.style.color = 'white';

/*
14 Grupo - Alterando atributos com if:
No arquivo script.js, siga as etapas abaixo:
o Verifique se o atributo `href` da tag `<a>` com id `link` está com
conteúdo: “https://www.w3schools.com/”.
o Caso não esteja, faça com que “https://www.w3schools.com/” se
torne o endereço deste link
o Obs:
o Não faça as alterações `manualmente` no arquivo
`index.html`.
o Utilize o DOM para resolver o exercício.
*/

let oLink = document.getElementById('link');

if(oLink.getAttribute('href') !== 'https://www.w3schools.com/') {
    oLink.setAttribute('href', 'https://www.w3schools.com/');
}

/*
15. Grupo - Trocando a imagem:
No arquivo script.js, siga as etapas abaixo:
o Após clicar na tag <img>.
o Troque o conteúdo do seu atributo `src`.
o Faça aparecer a imagem chamada “javaScript.png”.
o Obs:
o Não faça as alterações `manualmente` no arquivo
`index.html`.
o Somente pode-se adicionar uma função de click na img
o Utilize o DOM para resolver o exercício.
*/

function trocar() {
   let imagem = document.querySelector('img');
   imagem.setAttribute('src', 'acdog2.jpg');
}


}