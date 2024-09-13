function display() {
  dispWin = window.open(
    "",
    "NewWin",
    "menubar=no,toolbar=no,status=no,width=400,height=200"
  );
  mensagem = "<ul><li>NOME:" + document.form1.nome.value + "</li>"; /* é usado o nome do elemento, mas poderia ser um indexador, já que o form é um array */
  mensagem += "<li>TELEFONE:</li>" + document.form1.fone.value + "</li>";
  mensagem += "<li>MENSAGEM:</li>" + document.form1.mensagem.value + "</li>";
  mensagem += "<li>TOKEN:</li>" + document.form1.token.value + "</li>";
  mensagem += "<li>CURSO:" + document.form1.curso.value + "</li>";
  mensagem += "<li>TURNO:" + document.form1.turno.value + "</li>";
  mensagem += "<li>PAGAMENTO:" + document.form1.pagamento.value + "</li>";
  mensagem += "</ul>";
  dispWin.document.write(mensagem);
}

document.getElementById("exibir").addEventListener("click", display);

// Variável booleana para alternar o modo escuro
let darkMode = false;
// Função para alternar o modo de exibição
window.onclick = function(event) {
    if (!event.target.closest("fieldset")) { /* passa a proximidade do elemento */
// Verifica o valor da variável darkMode
        if(darkMode === false) {
// Se darkMode for falso, aplica o modo escuro
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            console.log("Modo escuro ativado.");
        } else {
// Se darkMode for verdadeiro, aplica o modo regular
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            console.log("Modo regular ativado.");
        }
// Alterna o valor da variável darkMode
    darkMode = !darkMode;
    }
};
