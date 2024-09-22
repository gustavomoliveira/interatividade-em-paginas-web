/* 
Crie um objeto chamado “escola” que possua as propriedades: número de alunos, nome do diretor, ano de fundação e endereço.
O endereço é um outro objeto que possui as propriedades: rua, bairro e cidade. 
Crie ambos com valores genéricos definidos por você.
*/

let escola = {
    numeroAlunos: 250,
    nomeDiretor: 'Márcio Freitas',
    anoFundacao: 1987,
    endereco: {
        rua: 'João Paulo, 55',
        bairro: 'Pinheiros',
        cidade: 'São Paulo'
    }
};

console.log(escola);
console.log(escola.endereco);