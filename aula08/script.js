/* 
1 - Evento de clique:
- HTML
No arquivo ‘index.html’, siga as etapas abaixo:
1. Adicione um evento de ‘click’ no ‘<span>’ de conteúdo ‘Clique aqui’
- JavaScript
No arquivo `script.js`, siga as etapas abaixo:
2. Ao `clicar`, chame uma `função`, que fará aparecer um `alert` escrito `Cliquei`
*/

function clicar() {
    console.log('Cliquei!');
}

let span = document.querySelector('span');
span.style.color = 'red'; 

/*
2 – Adição de classes:
No arquivo `script.js`:
Adicione uma classe `card` ao elemento `<div id = “card”>`
---
OBSERVAÇÕES:
- Não faça as alterações `manualmente` no arquivo `index.html`
- Utilize o `DOM` para resolver o exercício
*/

let div = document.getElementById('card');
div.classList.add('card');

/*
3- Alterando classes:
- HTML
No arquivo `index.html`, siga as etapas abaixo:
1. Crie um elemento `<h1>`, contendo o texto `Título` e uma função de click
- JavaScript
No arquivo `script.js`, siga as etapas abaixo:
1. Ao clicar no `<h1>`, faça com que a classe `corVermelha` seja `Adicionada/removida`
alternadamente, ao `clicar` neste elemento
- CSS
No arquivo `style.css`:
1. Crie a classe `corVermelha`, que possui a propriedade `color: red;`
---
OBSERVAÇÕES:
- Utilize o `DOM` para resolver o exercício
- Utilize o método `toggle()`, para adicionar/remover a `cor`
*/

function trocaCor() {
    let elementoH1 = document.querySelector('h1');
    elementoH1.classList.toggle('corVermelha');
}

/* 
4- Adicionando classes:
No arquivo `script.js`, siga as etapas abaixo:
1. Criar a classe `texto` com:
- text-align: center;
- font-weight: bold;
2. Clique no botão da tag `<button>`
3. Ao clicar chame uma `função`, que adicione a classe chamada `“texto”` na tag `<p>`
---
OBSERVAÇÕES:
- Não faça as alterações `manualmente` no arquivo `index.html`
- Utilize o `DOM` para resolver o exercício
*/

function formataTexto() {
    let adicionaTexto = document.querySelector('button + p');
    adicionaTexto.classList.add('texto');
}

/* 
5- Alterando classes:
No arquivo `script.js`, siga as etapas abaixo:
1. Criar a classe `titulo` com:
- text-align: center;
- color: white;
- background-color: blue;
1. Clique na tag `<h2>`
2. Ao clicar chame uma `função`, que ative/desative a classe chamada `“titulo”` na tag
`<h2>`
---
OBSERVAÇÕES:
- Não faça as alterações `manualmente` no arquivo `index.html`
- Utilize o `DOM` para resolver o exercício
*/

function trocarTitulo() {
    let elementoH2 = document.querySelector('h2');
    elementoH2.classList.toggle('titulo');
}

/*
Clique na tag li com id 'item' chamando uma função para alteração de classe no elemento pai.
*/

function trocaClasse() {
    let elementoFilho = document.getElementById('item1');
    let elementoPai = elementoFilho.parentNode;
    elementoPai.classList.toggle('lista2');
}