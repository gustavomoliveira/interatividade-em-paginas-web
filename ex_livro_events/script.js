/* 
Practice exercise 10.9
Take the following steps:
    Select all the page buttons into a JavaScript object.
    Loop through each button, and create a function within the button scope called output.
    Within the output() function, add a console.log() method that outputs the current object's textContent. You can reference the current parent object using the this keyword.
    As you loop through the buttons attach an event listener that when clicked invokes the output() function.
*/

let buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    function output() {
       alert(this.textContent);
    }
    btn.addEventListener('click', output);
});

/* 
Practice exercise 10.10
    Select the page elements as JavaScript objects.
    Add an onclick event listener to the add button.
    Once the button is clicked, it should add the contents of the input field to the end of the list.
    You can call the function addOne().
    Within addOne(), create li elements to append to the main list on the page.
    Add the input value to the list item text content.
    Within the addOne() function, get the current value of the addItem input field.
    Use that value to create a textNode with that value, adding it to the list item.
    Append the textNode to the list item.
*/
let addItem = document.getElementById('addItem');
let olList = document.getElementById('sList');

function addOne() {
    let listItem = document.createElement('li');
    listItem.innerText = addItem.value;
    olList.appendChild(listItem);
}
