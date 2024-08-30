/* 
Exercício 7 Manipulando classes I
    No arquivo ‘script.js’, siga as etapas abaixo:
        Clique no botão da tag ‘<button>‘;
        Ao clicar chame uma ‘função’, que faça com que as duas tags ‘<p>‘ desapareçam;
        A ‘cor de fundo’ da div, deve ser alterada para ‘azul’;
        Ao clicar novamente no botão, ‘desfaça’ as alterações feitas anteriormente. 
        Obs.:
            Utilize o ‘DOM’ para resolver o exercício;
            Para ‘aparecer’, use display: block;
            Para ‘desaparecer’, use display: none;
            ‘NÃO’ adicione id's, nas tags ‘<p>‘ para selecioná-los.
*/
let para1 = document.getElementsByTagName('p')[0];
let para2 = document.getElementsByTagName('p')[1];
let div = document.querySelector('div')

function desaparecer() {
    para1.style.display = 'block';
    para2.style.display = 'block';
    if(para1.style.display == 'block' && para2.style.display == 'block' && div.style.backgroundColor == '') {
        para1.style.display = 'none';
        para2.style.display = 'none';
        div.style.backgroundColor = 'blue';
    } else {
        para1.style.display = 'block';
        para2.style.display = 'block';
        div.style.backgroundColor = '';
    }
}