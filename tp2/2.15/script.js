/* 
Exercício 15 Grupo - Condições
    No arquivo script.js, siga as etapas abaixo:
        Clique no botão da tag <button>, dentro de uma <td>.
        Ao clicar chame uma função, que verifique:
            O conteúdo da classe "nota".
            Caso esta nota seja maior ou igual a 5: Adicione uma classe à <tr> da tag clicada, que faça sua cor de fundo fique verde.
            Caso esta nota seja menor do que 5: Adicione uma classe à <tr> da tag clicada, que faça sua cor de fundo fique vermelho.
        Obs:
            Não faça as alterações `manualmente` no arquivo `index.html`.
            Utilize o DOM para resolver o exercício.
*/

let botao = document.querySelectorAll('button');
console.log(botao);

botao.forEach(e => e.addEventListener('click', function(){
        let nota = this.closest('tr').querySelector('.nota');
        let valorNota = parseInt(nota.textContent);
        if(valorNota >= 5) {
            nota.parentElement.classList.add('verde');
        } else {
            nota.parentElement.classList.add('vermelho');
        }   
}));
