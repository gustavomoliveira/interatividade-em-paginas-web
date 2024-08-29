function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);/* The DataTransfer.setData() method sets the drag operation's drag data to the specified data and type.  */
}
/* The DataTransfer object is used to hold any data transferred between contexts,
such as a drag and drop operation, or clipboard read/write.
It may hold one or more data items, each of one or more data types. */

function allowDrop(ev) {
    ev.preventDefault();//usando o método preventDefault para impedir o comportamento padrão do elemento;
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

