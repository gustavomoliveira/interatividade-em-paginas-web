function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
    // event.dataTransfer é uma interface que permite manipular dados transferidos.
    // Os atributos indicam que o elemento que será arrastado é texto e o id do elemento.
    // Com essa interface o id do elemento pode ser recuperado quando ele é solto.

function dragging(event) {
        document.getElementById("demo").innerHTML = "O Texto está sendo arrastado";
}

function allowDrop(event) {
    event.preventDefault();
}
/* - O método preventDefault() é utilizado para impedir o comportamento padrão do navegador.
- Durante uma operação de arrastar e soltar, o comportamento padrão do navegador para o evento dragover é bloquear o
"drop" (soltar) de elementos. Ao chamar event.preventDefault(), desabilita-se esse comportamento padrão e permite-
se que o elemento arrastado seja solto na área onde esse evento ocorreu. */

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "O Texto foi solto";
}
/* - event.dataTransfer.getData("Text") recupera os dados que foram armazenados durante o evento de "dragstart". No código que
vimos anteriormente, esses dados eram o id do elemento que foi arrastado.
- A constante data armazena o valor desse id.
- event.target refere-se ao elemento onde o item foi solto (o alvo de "drop").
- document.getElementById(data) obtém o elemento que foi arrastado, usando o id armazenado na constante data.
- event.target.appendChild(...) anexa esse elemento (que foi arrastado) como filho do elemento de destino (onde ele foi solto). */