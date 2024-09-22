/* 
Crie um objeto “fruta” que possua cor, tamanho e país.
Atribua “amarelo” para cor, “média” para tamanho e “Brasil” para país.
Após isso, peça para o usuário digitar uma cor, um tamanho (pequena, média ou grande) e um país.
Atualize as propriedades do objeto criado de acordo com o que foi digitado pelo usuário.
*/

let fruta = {
    cor: 'amarelo',
    tamanho: 'média',
    pais: 'Brasil'
};
console.log(fruta);

function criaFruta() {
    let cor = document.getElementById('cor').value;
    let pais = document.getElementById('pais').value;
    let tamanho = document.getElementById('tamanho').value.toLowerCase();


    if(tamanho !== 'pequena' && tamanho !== 'média' && tamanho !== 'grande') {
         alert('Digite um tamanho válido: "pequena", "média" ou "grande".');
    }

    fruta.cor = cor;
    fruta.tamanho = tamanho;
    fruta.pais = pais.charAt(0).toUpperCase() + pais.slice(1);

    console.log(fruta);
}
