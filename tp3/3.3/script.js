/* 
No javaScript, adicione um `evento` de teclado ao elemento `<input>`, que ao `pressionar` uma tecla neste elemento, verifique:
Se a tecla pressionada é a `letra a`.
Caso seja, exiba a mensagem `Letra a digitada`.
Observações:
Utilize `onkeyup`, para verificar se a `letra digitada` é `a`.
A mensagem deve ser exibida, no `alert()`.
*/

function verifica(event) {
    if(event.key === 'a' || event.key === 'A') {
        alert('Tecla "a" digitada!');
    }
}