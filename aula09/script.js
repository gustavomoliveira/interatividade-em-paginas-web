// Seleciona o elemento
const titulo = document.getElementById('titulo');

// Adiciona um evento de clique
titulo.addEventListener('click', function() { //função anônima;
alert('O título foi clicado!');
});

// Adiciona um evento de mouseover (quando o mouse passa sobre o elemento)
titulo.addEventListener('mouseover', function() { //função anônima;
titulo.style.color = 'blue';
});

// Adiciona um evento de mouseout (quando o mouse sai do elemento)
titulo.addEventListener('mouseout', function() { //função anônima;
titulo.style.color = 'black';
});


const para = document.createElement("p");
const node = document.createTextNode("Este é o novo parágrafo.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

const child = document.getElementById("p1");
element.insertBefore(para, child); //o insertBefore() adiciona um node antes de um elemento escolhido

/* 
Próxima tarefa tem o objetivo de atualizar o conteúdo de um elemento já existente em HTML.
Vamos criar dois inputs e uma tabela.
Em seguida um botão, ao clicar neste botão, o conteúdo dos inputs deverá ser inserido na tabela.
*/

const bAdicionar = document.getElementById('adicionarTabela');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

bAdicionar.addEventListener('click', adicionarDados);

function adicionarDados() {
    const valor1 = document.getElementById('input1').value;
    const valor2 = document.getElementById('input2').value;
    // Verifica se os valores não estão vazios
    if (valor1.trim() !== "" && valor2.trim() !== "") {
    // Cria uma nova linha
    const novaLinha = tabela.insertRow();
    // Cria e insere novas células com os valores
    const celula1 = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);
    celula1.textContent = valor1;
    celula2.textContent = valor2;
    // Limpa os inputs após adicionar os valores à tabela
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    } else {
    alert("Por favor, preencha ambos os campos antes de adicionar à tabela.");
    }
}
