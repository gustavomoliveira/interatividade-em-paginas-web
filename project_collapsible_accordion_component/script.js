/* 
Collapsible accordion component
Build a collapsing and expanding accordion component that will open page elements,
hiding and showing content when the title tab is clicked.
Using the following HTML as a template, add the completed
script element and create the desired functionality with JavaScript:

Take the following steps:
    Using querySelectorAll(), select all the elements with a class of title.
    Using querySelectorAll(), select all the elements with a class of myText.
    This should be the same number of elements as the title elements.
    Iterate through all the title elements and add event listeners that,
    once clicked, will select the next element siblings.
    Select the element on the click action and toggle the classlist of the element
    with the class of active.
    This will allow the user to click the element and hide and show the below content.
    Add a function that will be invoked each time the elements are clicked
    that will remove the class of active from all the elements.
    This will hide all the elements with myText.
*/

let elementsTitle = document.querySelectorAll('.title'); //seleciona todos os elementos com a classe passada;
let elementsMyText = document.querySelectorAll('.myText');
console.log(elementsTitle);
console.log(elementsMyText);

elementsTitle.forEach(element => { //percorre a node.list adicionando evento de click todas as vezes que o elemento passado é clicado
    element.addEventListener('click', (e) => {
        console.log(element.nextElementSibling);
        removeClass(); //assim que o elemento é clicado é chamada uma função que remove a classe 'active'
        element.nextElementSibling.classList.toggle('active'); //cria um toggle para ativar e desativar a classe 'active'
    });
});

function removeClass() { //função que remove a classe 'active' dos elementos de classe myText;
    elementsMyText.forEach(el => {
        el.classList.remove('active');
    });
}