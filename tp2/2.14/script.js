/* 
Exercício 14 Grupo - Troca de classes
    No arquivo script.js, siga as etapas abaixo:
        Inverta as classes da tabela.
        Obs:
            Não faça as alterações manualmente no arquivo index.html.
            Utilize o DOM para resolver o exercício.
            Itens com classe “azul” terão a classe “vermelho”.
            Itens com classe “vermelho” terão a classe “azul”.
*/

let azul = document.querySelectorAll('.azul');
let vermelho = document.querySelectorAll('.vermelho');
console.log(azul);
console.log(vermelho);

for(let i = 0; i < azul.length; i++) {
    azul[i].classList.replace('azul', 'vermelho');
}

for(let i = 0; i < vermelho.length; i++) {
    vermelho[i].classList.replace('vermelho', 'azul');
}
console.log(azul);
console.log(vermelho);

