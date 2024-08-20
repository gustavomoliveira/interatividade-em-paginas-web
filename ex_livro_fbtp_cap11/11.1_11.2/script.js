/* 
Practice exercise 11.1
Personalize your web pages. Allow users to change the theme of the page display between regular mode and dark mode.
    Within a simple HTML document, set up a Boolean value variable to use that will toggle the color modes.
    Use window.onclick to set up a function that outputs a message in the console when clicked.
    You can use the value of the Boolean variable.
    Within the function, add a condition that checks whether the darkMode variable is true or false.
    If false, then update the page style to a background color of black and a font color of white.
    Add an else response that changes the color of the background to white and the color of
    the text to black. Also, update the value of the darkMode variable accordingly.
*/

let darkMode = false;

window.addEventListener('click', changeMode);

function changeMode() {
    console.log(darkMode);
    if (!darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false;
    }
}


/* 
Practice exercise 11.2
Create several divs with color names in textContent.
Add JavaScript to add click event listeners to each element, and as each element is clicked,
update the background color of the body to match the color name in the div.
*/

let divs = document.querySelectorAll('div');

divs.forEach(el => {
    el.addEventListener('click', changeColor);
    function changeColor() {
        document.body.style.backgroundColor = el.textContent;
    }
});