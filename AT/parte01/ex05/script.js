/* 
Crie no HTML um elemento “span” de id=”texto” contendo o texto “Fulano” e um elemento “input” de id=”nome”.
Crie também um botão que ao ser clicado obtenha o texto digitado pelo usuário no input e substitua o conteúdo
do elemento “span” com este texto.
*/

function substitui() {
    let texto = document.getElementById('texto');
    let input = document.getElementById('nome').value;
    texto.textContent = input;
}



