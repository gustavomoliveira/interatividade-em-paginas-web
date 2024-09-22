/* 
Pergunte ao usuário seu nome, idade, e-mail e sexo.
Após isso, crie um objeto chamado pessoa que tenha essas propriedades e
defina o valor das propriedades conforme os valores digitados pelo usuário.
*/

function criaPessoa() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let sexo = document.getElementsByName('sexo');
    let sexoSelecionado = '';

    sexo.forEach(el => {
        if(el.checked) {
            sexoSelecionado = el.value;
        }
    });
        
    let pessoa = {
        nome: nome,
        idade: idade,
        email: email,
        sexo: sexoSelecionado
    };

    document.getElementById('resultado').textContent = 
   `Pessoa - Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - E-mail: ${pessoa.idade} - Sexo: ${pessoa.sexo}`
}
