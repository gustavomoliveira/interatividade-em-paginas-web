/*
Practice exercise 10.3
Use JavaScript to select page elements via their tag name:
    Start by creating a simple HTML file.
    Create three HTML elements using the same tag.
    Add some content within each element so you can distinguish between them
    Add a script element to your HTML file, and within it select the page elements by tag name and store them in a variable as an array
    Using the index value, select the middle element and output it into the console.
*/

let elementos = document.getElementsByTagName('p');
console.log(elementos[1]);

/*
Practice exercise 10.4
Select all matching page elements using the class name of the element.
    Create a simple HTML file to work on.
    Add three HTML elements adding the same class to each.
    You can use different tags as long as the same element class is included.
    Add some content within each element so you can distinguish between them.
    Add a script element to your file, and within it select the page elements by class name.
    Assign the resulting HTMLCollection values to a variable.
    You can use an index value to select the individual HTMLCollection items, just as you would for array items.
    Starting with an index of 0, select one of the page elements with the class name and output the element into the console.
*/

let elementos2 = document.getElementsByClassName('paragrafo');
console.log(elementos2[2]);

/*
Practice exercise 10.5
Use querySelector() to enable single element selection:
    Create another simple HTML file.
    Create four HTML elements adding the same class to each.
    They can be different tag names as long as they have the class within the element attribute.
    Add some content within each element so you can distinguish between them.
    Within a script element, use querySelector() to select the first
    occurrence of the elements with that class and store it in a variable.
    If there is more than one matching result in querySelector(), it will return the first one.
    Output the element into the console.
*/

let query = document.querySelector('.paragrafo');
console.log(query);

/*
Practice exercise 10.6
Use querySelectorAll() to select all matching elements in an HTML file:
    Create an HTML file and add four HTML elements, adding the same class to each one.
    Add some content within each element so you can distinguish between them.
    Within a script element, use QuerySelectorAll() to select all the matching
    occurrences of the elements with that class and store them in a variable.
    Output all the elements into the console, first as an array and then looping through them to output them one by one.
*/

let queryAll = document.querySelectorAll('.paragrafo');
console.log(queryAll);

for(let i = 0; i < queryAll.length; i++) {
    console.log(queryAll[i]);
}

/*
Practice exercise 10.7
Create a button within a basic HTML document and add the onclick attribute.
The example will demonstrate how you can reference object data with this:
    Create a function to handle a click within your JavaScript code.
    You can name the function message.
    Add this to the onclick function parameters sending the current element object data using this.
    Within the message function, use console.dir() to output in the console the element
    object data that was sent to the function using onclick and this.
    Add a second button to the page also invoking the same function on the click.
    When the button is clicked, you should see the element that triggered the click in the console, like so:
*/

function message(elem) {
    console.dir(elem.innerText);
}
