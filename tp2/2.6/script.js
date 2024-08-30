/* 
Exercício 6 Alterando classes III
    No arquivo ‘script.js’, siga as etapas abaixo: 
        Clique no item da tag ‘<li>‘ com id ‘item’; 
        Ao clicar, chame uma ‘função’, que faça com que a classe ‘“lista”‘ seja trocada pela classe ‘“listaSelecionada”‘.
        Obs.:
            Não faça as alterações ‘manualmente’ no arquivo ‘index.html’;
            Somente pode-se adicionar uma função de click na ‘<li>‘ com id ‘item’;
            Não é necessário criar a classe ‘listaSelecionada’, parta do princípio que ela já exista;
            Utilize o ‘DOM’ para resolver o exercício; 
            Utilize a palavra chave ‘this’ e a navegação de ‘pais/filhos’, para selecionar a ‘<ol>‘;
            Não utilize a busca pelo ‘id’, ‘class’ ou ‘tag’.
*/

function trocaClasse(el) {
    let listaOrdenada = el.parentNode;
    if(listaOrdenada.classList.contains('lista')) {
        listaOrdenada.classList.replace('lista', 'listaSelecionada');
    }
}
