/* 
1 – Pergunte ao usuário o nome da empresa, e-mail, fone e área de atuação. Crie um
objeto chamado empresa que tenha essas propriedades e defina o valor das
propriedades conforme os valores digitados pelo usuário.
*/
function criarObjetoEmpresa() { 
    // Capturando os valores dos campos
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let area = document.getElementById("area").value;
    // Criando o objeto empresa de forma literal
    let empresa = {
        nome: nome,
        email: email,
        telefone: telefone,
        area: area,
    };
    // Exibindo o objeto na tela
    document.getElementById("resultado").innerText =
        "Empresa cadastrada:\n" +
        "Nome: " +
        empresa.nome +
        "\n" +
        "E-mail: " +
        empresa.email +
        "\n" +
        "Telefone: " +
        empresa.telefone +
        "\n" +
        "Área de Atuação: " +
        empresa.area;
}

//precisando de um obj de forma rápida, pode ser o sistema literal
//caso seja necessário a criação de vários objs, uso de class
